<template>
  <Layout>
    <template #main>
      <div class="main-container" ref="mainContainer" v-loading="isLoading">
        <BlogDetail :blog="data" v-if="data" />
        <BlogComment v-if="!isLoading" />
      </div>
    </template>

    <template #right>
      <div class="right-container" v-loading="isLoading">
        <BlogTOC :toc="data.toc" v-if="data" />
      </div>
    </template>

  </Layout>
</template>

<script>
  import Layout from "@/components/Layout"
  import BlogDetail from "./components/BlogDetail"
  import BlogTOC from "./components/BlogTOC"
  import fetchData from "@/mixins/fetchData"
  import mainScroll from "@/mixins/mainScroll.js"

  import {
    getBlog
  } from "@/api/blog"
  import BlogComment from "./components/BlogComment"
  import setTitle from "@/utils/setTitle"
  export default {
    mixins: [fetchData({}),mainScroll("mainContainer")],
    components: {
      Layout,
      BlogDetail,
      BlogTOC,
      BlogComment,
    },

    methods: {
      async fetchData() {
        //根据博客id获取博客数据
        const resp = await getBlog(this.$route.params.id);
        setTitle.setRouteTitle(resp.title)
        return resp
      },
     
    },

    updated() {
      const hash = location.hash;
      location.hash = "";
      setTimeout(() => {
        location.hash = hash;
      }, 50);
    }
  }
</script>

<style lang="less" scoped>
  .main-container {
    position: relative;
    height: 100%;
    overflow-y: scroll;
    padding: 20px;
    box-sizing: border-box;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  .right-container {
    width: 300px;
    position: relative;
    overflow-y: scroll;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
  }
</style>

