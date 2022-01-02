<template>
  <div v-loading="loading" class="home-container" ref="home" @wheel="handleWheel($event)">
    <ul class="carousel-container" :style="{marginTop}">
      <li v-for="item in data" :key="item.id">
        <RenderItem  :bannerData="item"  :index="index"/>
      </li>
    </ul>

    <!-- 上下两个箭头 -->
    <div v-show="index != 0" class="icon icon-up" @click="turnTo(index - 1)">
      <Icon type="arrowUp" />
    </div>
    <div v-show="index !== data.length - 1" class="icon icon-down" @click="turnTo(index + 1)">
      <Icon type="arrowDown" />
    </div>

    <!-- 右侧小点 -->
    <ul class="indicator">
      <li @click="turnTo(i)" :class="{active:i===index}" v-for="(item,i) in data" :key="item.id"></li>
    </ul>
  </div>
</template>

<script>
  // import {
  //   getBannerData
  // } from "@/api/banners.js";
  import {mapState} from "vuex"
  import Icon from "@/components/Icon/index";
  import RenderItem from "./RenderItem"
  export default {
    components: {
      RenderItem,
      Icon
    },
    data() {
      return {
        isLoading: true,
        // banners: [],
        index: 0, //索引
        homeHeight: 0,
      }
    },
    //计算属性
    computed: {
      marginTop() {
        return -this.index * this.homeHeight + "px";
      },
      ...mapState("banner",["data","loading"])
    },
    created() {
      this.$store.dispatch("banner/fetchBanners");
    },
    //方法
    methods: {

      turnTo(i) {
        this.index = i;
      },
      //鼠标滚轮 滚动时发生
      handleWheel(e){

        if(e.deltaY < -5 && this.index > 0){

          this.index --;
        }else if(e.deltaY > 5 && this.index < this.data.length - 1){

          this.index ++;
        }
      }
    },
    mounted() {
      this.homeHeight = this.$refs.home.clientHeight;
    }
  }
</script>

<style lang="less" scoped>
  @import "~@/styles/var.less";
  @import "~@/styles/lessBlock.less";

  .home-container {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;

    ul {
      padding: 0;
      margin: 0;
      list-style: none;
    }

  }

  .icon {
    .self-center();
    font-size: 30px;
    @gap: 25px;
    color: @gray;
    cursor: pointer;
    transform: translateX(-50%);

    &.icon-up {
      top: @gap;
      animation: jump-up 2s infinite;
    }

    &.icon-down {
      top: auto;
      bottom: @gap;
      animation: jump-down 2s infinite;
    }
    @jump:5px;
    @keyframes jump-up {
      0% {
        transform: translate(-50%, -@jump);
      }

      50% {
        transform: translate(-50%, @jump);
      }

      100% {
        transform: translate(-50%, -@jump);
      }
    }

    @keyframes jump-down {
      0% {
        transform: translate(-50%, -@jump);
      }

      50% {
        transform: translate(-50%, @jump);
      }

      100% {
        transform: translate(-50%, -@jump);
      }
    }
  }

  .carousel-container {
    width: 100%;
    height: 100%;
    transition: 500ms;

    li {
      width: 100%;
      height: 100%;
    }
  }

  .indicator {
    .self-center();
    transform: translateY(-50%);
    left: auto; //触发bfc ul变成行级块盒
    right: 20px;

    li {
      margin: 5px 0;
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: @words;
      cursor: pointer;
      margin-bottom: 10px;
      border: 1px solid #fff;
      box-sizing: border-box;

      &.active {
        background-color: #fff;
      }
    }
  }
</style>