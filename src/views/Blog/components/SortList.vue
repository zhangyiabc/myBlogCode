<template>
  <ul class="sort-list-container">
    <li v-for="(item, i) in list" :key="i">
      <span @click="handleClick(item)" :class="{ active: item.isSelect }">
        {{ item.name }}
      </span>
      <span @click="handleClick(item)" class="num" :class="{ active: item.isSelect }">{{item.aside}}</span>
      <SortList :list="item.children" @select="handleClick"/>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "SortList",
    props: {
      list: {
        type: Array,
        default: () => [],
      }
    },
    methods: {
      handleClick(item) {
        this.$emit("select", item)
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "~@/styles/var.less";

  .sort-list-container {
    list-style: none;
    padding: 0;
    .sort-list-container {
      margin-left: 1em;
    }

    li {
      min-height: 40px;
      line-height: 40px;
      font-size: 14px;
      cursor: pointer;

      .active {
        color: @warn;
        font-weight: bold;
      }

      
    }
    .num {
        font-size: 12px;
        margin-left: 1em;
        color: @gray;
      }
  }
</style>