<template>
  <div class="test-container">
    <Layout>
      <template #left>
        <div class="left">
          <Aside />
        </div>
      </template>
      <template #mian>
        <div class="main">
          主区域
        </div>
      </template>
      <!-- <template #right>

        <div class="right">
          右边栏区域，宽度适应内容，溢出隐藏
        </div>
      </template> -->
    </Layout>
  </div>
</template>

<script>
  import Aside from "@/components/SiteAside/index"
  import Layout from "./index"
  export default {
    components: {
      Layout,
      Aside
    }
  }
</script>

<style lang="less" scoped>
  .test-container {
    width: 80%;
    height: 100%;
    border: 2px solid;
    margin: 0 auto;
  }

  .left {
    width: 200px;
    height: 100%;
    background: lightcoral;
  }

  .main {
    width: 100%;
    height: 100%;
    background: lightseagreen;
  }

  .right {
    width: 150px;
    height: 100%;
    background: lightblue;
  }
</style>