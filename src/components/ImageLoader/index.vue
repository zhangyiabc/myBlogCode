<template>
  <div class="image-loder-container">
    <!-- 缩略图 -->
    <img v-if="!this.isComplete" :src="placeholder" class="placeholder" alt="">
    <!-- 原图 -->
    <img @load="imgLode" :src="src" alt="" :style="{opacity:originOpacity,transition:`${duration}ms`}">
  </div>
</template>

<script>
  export default {
    props: {
      src: {
        type: String,
        required: true

      },
      placeholder: {
        type: String,
        required: true
      },
      duration: {
        type: Number,
        default: 500,
      }
    },
    //数据：两个状态
    //1.图片加载完成
    //2.一切都完成
    data(){
      return {
        isImgLoaded : false,
        isComplete : false

      }
    },
    //计算属性
    computed:{
      originOpacity(){
        return this.isImgLoaded?1:0;
      }
    },
    methods: {
      imgLode() {
        //修改图片加载状态
        this.isImgLoaded = true;
        // console.log("图片加载完成");
        //初始方案：不足之处，图片过渡有白边
        // this.isComplete = true;
        // this.$emit("everyLoad");
        //方案二：图片过渡更加平滑
        setTimeout(() => {
          this.isComplete = true;
          //抛出事件everyLoad
          this.$emit("everyLoad");
        }, this.duration);
      }
    }
  }
</script>

<style lang="less" scoped>
  @import url(~@/styles/lessBlock.less);

  .image-loder-container {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;

    img {
      .self-fill();
      object-fit: cover;
    }

    .placeholder {
      filter: blur(0.5vw);
    }
  }
</style>