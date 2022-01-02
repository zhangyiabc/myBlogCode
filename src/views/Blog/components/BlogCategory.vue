<template>
  <div class="blogCategory-container" v-loading="isLoading">
    <h2>文章分类</h2>
    <SortList :list="list" @select="handleSelect"/>
  </div>
</template>

<script>
  import SortList from "./SortList"
  import fetchData from "@/mixins/fetchData.js";
  import {
    getBlogTypes
  } from "@/api/blog.js";
  export default {
    components: {
      SortList,
    },
    mixins: [fetchData([])],
    computed: {
      categoryId() {
        return +this.$route.params.categoryId || -1;
      },
      list() {
        //计算出全部文章的数量
        const articleTotal = this.data.reduce((a, b) => {
          return a + b.articleCount;
        }, 0);
        //添加一项 全部
        const result = [{
            name: "全部",
            id: -1,
            articleCount: articleTotal
          },
          ...this.data
        ];
        return result.map((it) => ({
          ...it,
          isSelect: it.id === this.categoryId,
          aside: `${it.articleCount}篇`,
        }));

      }
    },
    methods: {
      async fetchData() {
        const res = await getBlogTypes();
        return res;
      },

      handleSelect(item){
        const query = {
        page: 1,
        limit: this.limit,
      };
      // 跳转到 当前的分类id  当前的页容量  newPage的页码
      if (item.id === -1) {
        this.$router.push({
          name: "Blog",
          query,
        });
      } else {
        this.$router.push({
          name: "CategoryBlog",
          query,
          params: {
            categoryId: item.id,
          },
        });
      }
      }
    }

  }
</script>

<style lang="less" scoped>
  .blogCategory-container {
    width: 300px;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    position: relative;
    overflow-y: scroll;

    h2 {
      font-size: 20px;
    }
  }
</style>