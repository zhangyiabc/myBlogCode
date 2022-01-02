<template>
  <div class="message-container" ref="messageContainer">
    <MessageArea title="留言" :subTitle="`数量(${data.total})`" 
    :list="data.rows" :isListLoading="isLoading" @submit="handleSubmit" />
  </div>
</template>

<script>
  import MessageArea from "@/components/MessageArea";
  import fetchData from "@/mixins/fetchData";
  import * as msgApi from "@/api/message";
  import mainScroll from "@/mixins/mainScroll.js";
  export default {
    components: {
      MessageArea,
    },
    mixins: [
      fetchData({
        row: [],
        total: 0,
      }),
      mainScroll("messageContainer"),
    ],
    computed: {
      hasMore() {
        // console.log("length", this.data.rows.length);
        // console.log("total",this.data.total);
        return this.data.rows.length < this.data.total;
      },
    },
    data() {
      return {
        page: 1,
        limit: 10,
      };
    },
    created() {
      this.$bus.$on("mainScroll", this.handleScroll);
    },
    destroyed() {
      this.$bus.$off("mainScroll", this.handleScroll);
    },
    methods: {
      async fetchData() {
        // console.log("运行了")
        return await msgApi.getMessages(this.page, this.limit);
      },
      async handleSubmit(e, callback) {
        const resp = await msgApi.postMessage(e);
        console.log(resp);
        callback("感谢您的留言！！");
        this.data.rows.unshift(resp);
      },
      //加载更多方法
      async fetchMore() {


        //先判断一下是否需要加载
        if (!this.hasMore) {
          //没有更多了
          return;
        }
        this.page++;
        this.isLoading = true;

        //开始加载其他留言
        const resp = await this.fetchData();
        this.data.total = resp.total;
        this.data.rows = this.data.rows.concat(resp.rows);
        this.isLoading = false;
      },
      //滚动条处理函数
      handleScroll(dom) {

        //判断此时是否需要执行该函数
        if (!dom || this.isLoading) {
          // console.log("111") 
          return;
        }
        const range = 100; // 顶一个可接受的范围，在这个范围内都算达到了底部
        const dec = Math.abs(dom.scrollTop + dom.clientHeight - dom.scrollHeight);
        if (dec <= range) {
          this.fetchMore();
        }
      },
    },
  };
</script>

<style lang="less" scoped>
  .message-container {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    padding: 25px 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  .message-area-container {
    width: 700px;
    margin: 0 auto;
  }
</style>