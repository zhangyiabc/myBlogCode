<template>
  <div class="site-aside-container">

    <template v-if="data"> 
      <Avatar url="https://img2.baidu.com/it/u=2713184251,2162310881&fm=26&fmt=auto&gp=0.jpg" :size="150" />
      <h1 class="title">{{data.siteTitle}}</h1>
    </template>
    <Menu />
    <Contact v-if="data" />
    <p v-if="data" class="footer">
      {{data.icp}}
    </p>
  </div>
</template>

<script>
  import {
    mapState
  } from "vuex"
  import "@/styles/global.less";
  import Menu from "./Menu/index"
  import Avatar from "../Avatar/index"
  import Contact from "./Contact/index"

  export default {
    components: {
      Menu,
      Avatar,
      Contact
    },
    computed: {
      ...mapState("setting", ["data"])
    }
  }
</script>

<style lang="less" scoped>
  @import "~@/styles/var.less";

  .site-aside-container {
    width: 100%;
    height: 100%;

    background: @dark;
    padding: 20px 0;
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: auto;
  }

  .avatar-container {
    margin: 0 auto;
  }

  .footer {
    text-align: center;
    font-size: 12px;
  }

  .title {
    font-size: 1.2em;
    color: #fff;
    text-align: center;
  }
</style>