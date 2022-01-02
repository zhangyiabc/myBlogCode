<template>
  <div class="blog-list-container" ref="blogList" v-loading="isLoading">
    <ul>
      <li v-for="item in data.rows" :key="item.id">
        <div class="thumb"  v-if="item.thumb">
          <RouterLink :to="{
            name:'BlogDetail',
            params:{
              id:item.id
            }
          }">
            <img v-lazy="`${item.thumb}`" :alt="item.title" :title="item.title" />
          </RouterLink>
        </div>
        <div class="main">
          <RouterLink :to="{
            name:'BlogDetail',
            params:{
              id:item.id
            }
          }">
            <h2>{{ item.title }}</h2>
          </RouterLink>
          <div class="aside">
            <span>日期：{{ formatDate(item.createDate)}}</span>
            <span>浏览：{{ item.scanNumber }}</span>
            <span>评论：{{ item.commentNumber }}</span>
            <RouterLink :to="{
              name:'CategoryBlog',
              params:{
                categoryId:item.category.id
              }
            }">{{ item.category.name }}
            </RouterLink>
          </div>
          <div class="desc">
            {{ item.description }}
          </div>
        </div>
      </li>
    </ul>
    <!-- 分页放到这里 -->

    <Pager v-if="data.total" @pageChange="handleChange" :total="data.total" :current="routeInfo.page"
      :limit="routeInfo.limit" />
  </div>
</template>

<script>
  import Pager from "@/components/Pager";
  import fetchData from "@/mixins/fetchData.js";
  import mainScroll from "@/mixins/mainScroll.js"
  import {
    getBlogs
  } from "@/api/blog.js";
  import {
    formatDate
  } from "@/utils";
  export default {
    mixins: [fetchData({}),mainScroll("blogList")],
    components: {
      Pager,
    },
    computed: {
      routeInfo() {
        const categoryId = +this.$route.params.categoryId || -1;
        const page = +this.$route.query.page || 1;
        const limit = +this.$route.query.limit || 10;
        return {
          categoryId,
          page,
          limit
        };

      }
    },

    methods: {
      formatDate,
      async fetchData() {
        const res = await getBlogs(this.routeInfo.page, this.routeInfo.limit, this.routeInfo.categoryId);
        return res;
      },
      handleChange(newPage) {
        //跳转到当前点击的页码、分类id、页容量
        //  /blog?page=${newPage}&limit=${this.routeInfo.limit}
        //判断是否有分类
        if (this.routeInfo.categoryId == -1) {
          //无分类
          this.$router.push({
            name: "Blog",
            query: {
              page: newPage,
              limit: this.routeInfo.limit
            }
          })

        } else {
          //有分类
          this.$router.push({
            name: "CategoryBlog",
            params: {
              categoryId: this.routeInfo.categoryId
            },
            query: {
              page: newPage,
              limit: this.routeInfo.limit
            }
          })
        }
      },

    },
    watch: {
      async $route(newVal, oldVal) {
        console.log(this.data)
        this.isLoading = true;
        //滚动高度为0
        this.$refs.blogList.scrollTop = 0;
        this.data = await this.fetchData();
        this.isLoading = false

      }

    },

  };
</script>

<style scoped lang="less">
  @import "~@/styles/var.less";

  .blog-list-container {
    line-height: 1.7;
    position: relative;
    padding: 20px;
    overflow-y: scroll;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    scroll-behavior: smooth;

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }
  }

  li {
    display: flex;
    padding: 15px 0;
    border-bottom: 1px solid @gray;

    .thumb {
      flex: 0 0 auto;
      margin-right: 15px;

      img {
        display: block;
        max-width: 200px;
        border-radius: 5px;
      }
    }

    .main {
      flex: 1 1 auto;

      h2 {
        margin: 0;
      }
    }

    .aside {
      font-size: 12px;
      color: @gray;

      span {
        margin-right: 15px;
      }
    }

    .desc {
      margin: 15px 0;
      font-size: 14px;
    }
  }
</style>