<template>
  <div class="render-item-container" ref="container">
    <div class="render-img" ref="image" @mousemove="moveFun" :style="ImagePosition">
      <ImageLoader @everyLoad="showWordInfo" :src="bannerData.bigImg" :placeholder="bannerData.midImg" />
    </div>
    <div class="title" ref="title">{{bannerData.title}}</div>
    <div class="desc" ref="desc">{{bannerData.description}}</div>
  </div>
</template>

<script>
  import ImageLoader from "@/components/ImageLoader";

  export default {
    props: ["bannerData", "index"],
    components: {
      ImageLoader,
    },
    data() {
      return {
        titleWidth: 0,
        descWidth: 0,
        //里层容器尺寸
        containerSize: 0,
        //外层容器尺寸
        innerSize: 0,
        //鼠标横坐标
        mouseX: 0,
        //鼠标纵坐标
        mouseY: 0,
      }
    },
    //计算属性
    computed: {
      //获取图片的坐标

      /**
       * x轴剩余位置（已知）        求得图片横向偏移位移
       * -----------------    =   -------------
       * 鼠标x轴最远位置（已知）    鼠标x轴位置
       * 就是外层元素的宽度
       */
      ImagePosition() {
        if (!this.containerSize || !this.innerSize) {
          return
        }
        const remainX =this.innerSize.width- this.containerSize.width;
        const left = (-remainX / this.containerSize.width) * this.mouseX;
        const remainY = this.innerSize.height -this.containerSize.height;
        const top = (-remainY / this.containerSize.height) * this.mouseY;
        return {
          transform: `translate(${left}px, ${top}px)`,
        }
      },
      //获取中心点坐标
      center() {
        return {
          x: this.containerSize.width / 2,
          y: this.containerSize.height / 2,
        }
      }

    },
    //挂载完成后
    mounted() {
      //获取文字区域的宽度
      this.titleWidth = this.$refs.title.clientWidth;
      this.descWidth = this.$refs.desc.clientWidth;
      //组件挂载完成后获取一次元素尺寸
      this.setSize();
      //设置鼠标尺寸
      this.mouseX = this.center.x;
      this.mouseY = this.center.y;
      window.addEventListener("resize", this.setSize);
    },
    //组件销毁后----解绑定
    destroyed(){
      window.removeEventListener("resize",this.setSize)
    },
    methods: {
      showWordInfo() {
        this.$refs.title.style.width = 0;
        this.$refs.title.style.opacity = 1;
        //强行渲染页面
        this.$refs.title.clientWidth;
        this.$refs.title.style.transition = "1s";
        this.$refs.title.style.width = this.titleWidth + "px";

        this.$refs.desc.style.width = 0;
        this.$refs.desc.style.opacity = 1;
        //强行渲染页面
        this.$refs.desc.clientWidth;
        this.$refs.desc.style.transition = "2s 1s";
        this.$refs.desc.style.width = this.descWidth + "px";
      },
      //获取元素尺寸
      setSize() {
        this.containerSize = {
          width: this.$refs.container.clientWidth,
          height: this.$refs.container.clientHeight
        }

        this.innerSize = {
          width: this.$refs.image.clientWidth,
          height: this.$refs.image.clientHeight
        }
      },
      moveFun(e) {
        const rect = this.$refs.container.getBoundingClientRect();
        this.mouseX = e.clientX - rect.left;
        this.mouseY = e.clientY - rect.top;
      },
      leaveFun() {
        this.mouseX = this.center.x;
        this.mouseY = this.center.y;
      }

    }
  };
</script>

<style lang="less" scoped>
  @import "~@/styles/var.less";

  .render-item-container {
    // background: @dark;
    width: 100%;
    height: 100%;
    color: #fff;
    position: relative;
    overflow: hidden;

    .title,
    .desc {
      position: absolute;
      letter-spacing: 3px;
      left: 30px;
      color: #fff;
      text-shadow: 1px 0 0 rgba(0, 0, 0, 0.5), -1px 0 0 rgba(0, 0, 0, 0.5),
        0 1px 0 rgba(0, 0, 0, 0.5), 0 -1px 0 rgba(0, 0, 0, 0.5);
      white-space: nowrap;
      // z-index: 5;
      overflow: hidden;
      opacity: 0;

    }

    .title {
      top: calc(50% - 40px);
      font-size: 2em;
    }

    .desc {
      top: calc(50% + 20px);
      font-size: 1.2em;
      color: lighten(@gray, 20%);
    }
  }

  .render-img {
    width: 110%;
    height: 110%;
    position: absolute;
    left: 0;
    top: 0;
    transition: 0.3s;
  }
</style>