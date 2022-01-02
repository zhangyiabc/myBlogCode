<template>
  <div class="test-container">
    <Menu />
  </div>
</template>

<script>
  import Menu from  "./index.vue"
  export default {
    components:{
      Menu,
    }
  }
</script>

<style lang="less" scoped>
  .test-container{
    width: 300px;
    height: 500px;
    background: rgba(0,0,0,0.8);
  }
</style>