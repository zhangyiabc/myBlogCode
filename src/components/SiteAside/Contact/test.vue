<template>
  <div class="test-container">
    <Contact />
  </div>
</template>

<script>
  import Contact from "./index"
  export default {
    components:{
      Contact
    }
  }
</script>

<style lang="less" scoped>
  .test-container{
    width: 300px;
    height: 500px;
    background: rgba(0,0,0,0.9);
  }
</style>