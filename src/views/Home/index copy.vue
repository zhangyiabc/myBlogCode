<template>
  <div class="home-container" ref="home">
    <h1>首页</h1>
    <button @click="pin">点击评论</button>
  </div>
</template>

<script>
  export default {
    methods: {
      pin() {
        console.log(this.$refs.home)
        this.$showMessage({
          content: "评论成功",
          type: "success",
          container: this.$refs.home,
          callback: function () {
            console.log("完成！！！");
          },
        })
      }
    }
  }
</script>

<style>

</style>