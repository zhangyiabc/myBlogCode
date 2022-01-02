<template>
  <MessageArea @submit="handleSubmit" title="评论列表" :list="data.rows" :subTitle="String(data.total)"
    :isListLoading="isLoading" />
</template>

<script>
  import fetchData from "@/mixins/fetchData.js";

  import {
    getComments,
    postComment
  } from "@/api/blog.js";

  import MessageArea from "@/components/MessageArea"
  export default {
    components: {
      MessageArea,
    },
    mixins: [fetchData({
      total: 0,
      rows: []
    })],
    data() {
      return {
        page: 1,
        limit: 10
      }
    },
    created() {
      this.$bus.$on("mainScroll", this.handleScroll)
    },
    destroyed() {
      this.$bus.$off("mainScroll", this.handleScroll)
    },

    methods: {
      //处理滚动事件函数
      handleScroll(dom) {
        if (this.isLoading || !dom) {
          return
        }
        // 定一个滚动范围，在此范围内触发事件
        const rang = 100;
        const dec = Math.abs(dom.scrollTop + dom.clientHeight - dom.scrollHeight);
        if (dec < rang) {
          this.fetchMore();
        }
      },
      //加载data数据
      async fetchData() {
        return await getComments(this.$route.params.id, this.page, this.limit);
      },
      // 加载更多
      async fetchMore() {
        if (this.data.rows.length > this.data.total) {
          return
        }
        this.isLoading = true;
        this.page++;
        //重新获取数据
        const resp = await this.fetchData();
        //修改数据总数
        this.data.total = resp.total;
        //将新获取数据添加至当前数据
        this.data.rows = this.data.rows.concat(resp.rows);
        this.isLoading = false

      },
      //提交评论
      async handleSubmit(formData, callback) {
        //提交评论信息 参数是formData
        const resp = await postComment({
          blogId: this.$route.params.id,
          ...formData,
        });
        //将得到的结果 添加入评论的第一项;
        this.data.rows.unshift(resp);
        //评论总数 +1
        this.data.total++
        callback("评论成功")
      }
    }
  }
</script>
<style scoped lang="less">
  .blog-comment-container {
    margin: 30px 0;
  }
</style>