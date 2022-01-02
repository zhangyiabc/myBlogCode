<template>
  <div class="blogTOC-container">
    <h2>目录</h2>
    <SortList :list="withSelect" @select="handleSelect" />
  </div>
</template>

<script>
  import SortList from "./SortList"
  import {
    debounce
  } from "@/utils"
  export default {
    components: {
      SortList,
    },
    props: {
      toc: {
        type: Array,
        // required: true,
      }
    },
    data() {
      return {
        activeAnchor: "article-md-title-1"
      }
    },


    computed: {
      // 根据toc属性以及activeAnchor得到带有isSelect属性的toc数组
      withSelect() {
        var getCompleteToc = (toc = []) => {
          return toc.map(it => ({
            ...it,
            isSelect: this.activeAnchor === it.anchor,
            children: it.children && getCompleteToc(it.children)
          }))
        };
        return getCompleteToc(this.toc)
      },
      //根据toc获取元素数组
      domArr() {
        const doms = [];
        const getDoms = (toc) => {

          for (let dom of toc) {
            doms.push(document.getElementById(dom.anchor))
            if (dom.children && dom.children.length) {
              getDoms(dom.children)
            }
          }

        }
        getDoms(this.toc);

        return doms
      },

    },
    methods: {
      handleSelect(e) {
        //切换锚点
        location.hash = e.anchor;
      },
      setSelect(ScrollDom) {
        if (!ScrollDom) {
          return
        }
        this.activeAnchor = '';//先清空前面的
        const range = 200; //定一个范围

        for (const dom of this.domArr) {
          if (!dom) {
            continue;
          }
          const top = dom.getBoundingClientRect().top;
          //1.在规定范围内
          if (top > 0 && top < range) {
            this.activeAnchor = dom.id;
            return
          } else if (top > range) {
            //2.在规定范围下方
            return
          } else {
            //3.在规定范围上方
            this.activeAnchor = dom.id
          }
        }
      }

    },
    created() {
      this.setSelectDebounce = debounce(this.setSelect, 50);
      this.$bus.$on("mainScroll", this.setSelectDebounce);
    },
    destroyed() {
      this.$bus.$off("mainScroll", this.setSelectDebounce);
    }
  }
</script>

<style lang="less" scoped>
  .blog-toc-container {
    h2 {
      font-weight: bold;
      letter-spacing: 2px;
      font-size: 1em;
      margin: 0;
    }
  }
</style>