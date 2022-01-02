<template>
  <div @click="handleClick" v-show="show" class="to-top-container">
    Top
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: false
      }
    },
    created() {
      this.$bus.$on("mainScroll", this.handleShow)
    },
    destroyed() {
      this.$bus.$off("mainScroll", this.handleShow)
    },
    methods: {
      handleShow(dom) {
        if (!dom) {
          this.show = false;
          return
        }
        this.show = dom.scrollTop >= 600
      },
      handleClick() {
        this.$bus.$emit("setMainScroll", 0)
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "~@/styles/var.less";

  .to-top-container {
    background-color: @primary;
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: #fff;
    font-weight: bold;
    border-radius: 50%;
    position: fixed;
    right: 60px;
    bottom: 40px;
    cursor: pointer;
  }
</style>