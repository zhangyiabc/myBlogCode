<template>
  <div class="test-container">
    <SiteAside />
  </div>
</template>

<script>
  import SiteAside from "./index"
  export default {
    components:{
      SiteAside,
    }
  }
</script>

<style lang="less" scoped>
@import "~@/styles/global.less";
.test-container {
  width: 250px;
  height: 100vh;
  box-sizing: border-box;
  // border: 2px solid;
  // margin: 0 auto;
}
</style>