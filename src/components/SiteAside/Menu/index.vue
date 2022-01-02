<template>
  <nav class="menu-container">
    <RouterLink v-for="item in items" :key="item.name" :to="{ name: item.name }" 
    :exact="item.exact"
    active-class="selected"
    exact-active-class="" >
      <div class="icon">
        <Icon :type="item.icon" />
      </div>
      <span>{{item.title}}</span>
    </RouterLink>
  </nav>
</template>

<script>
  import Icon from "@/components/Icon/index.vue"
  export default {
    components: {
      Icon
    },
    data() {
      return {
        items: [{
          name: "Home",
          title: "首页",
          icon: "home",
          exact: true,
        },
        {
          name: "Blog",
          title: "文章",
          icon: "blog",
          exact: false, // 激活状态是否要精确匹配
        },
        {
          name: "About",
          title: "关于我",
          icon: "about",
          exact: true,
        },
        {
          name: "Project",
          title: "项目&效果",
          icon: "code",
          exact: true,
        },
        {
          name: "Message",
          title: "留言板",
          icon: "chat",
          exact: true,
        },
        ],
      }
    },
    methods: {
      isSelect(item) {
        //判断
        let link = item.link;
        let pathname = location.pathname;
        if (item.startWith) {
          if (pathname.startsWith(link)) {
            return true
          }
        } else {
          if (pathname == link) {
            return true
          }
        }
        return false;
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "~@/styles/var.less";
  @import url(~@/styles/global.less);

  .menu-container {
    color: @gray;
    margin: 24px 0;


    a {
      &.selected {
        background: darken(@gray, 50%);
      }

      padding: 0 50px;
      display: block;
      display: flex;
      align-items: center;
      height: 45px;

      .icon {
        width: 24px;
      }

      &:hover {
        color: #fff;
      }
    }
  }
</style>