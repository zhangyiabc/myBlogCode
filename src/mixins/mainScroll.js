export default function (refValue) {
  return {
    methods: {
      /**
       * 滚动条滚动事件处理函数
       */
      handleMainScroll() {

        this.$bus.$emit("mainScroll", this.$refs[refValue])
      },
      /**
       * 设置滚动高度
       * value  滚动的高度
       */
      handleSetMainMixinScroll(value) {
        this.$refs[refValue].scrollTop = value;
      },
    },
    mounted() {

      this.$bus.$on("setMainScroll", this.handleSetMainMixinScroll)

      this.$refs[refValue].addEventListener("scroll", this.handleMainScroll);
    },
    beforeDestroy() {

      this.$bus.$emit("mainScroll")
      this.$bus.$off("setMainScroll", this.handleSetMainScroll);
      this.$refs[refValue].removeEventListener("scroll", this.handleMainScroll);
    },
  }
}