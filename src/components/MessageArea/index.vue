<template>
  <div class="message-area-container">
    <DataForm v-on="$listeners" />
    <h3>
      {{ title }}
      <span>{{ subTitle }}</span>
    </h3>
    <DataList :commentList="list" />
    <div class="loading" v-loading="isListLoading"></div>
  </div>
</template>

<script>
import DataForm from "./DataForm";
import DataList from "./DataList";
export default {
  props: {
    //主标题：评论
    title: {
      type: String,
      default: "",
    },
    //副标题 ：评论数量
    subTitle: {
      type: String,
      default: "",
    },
    // 评论列表
    list: {
      type: Array,
      default: () => [],
    },
    isListLoading: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    DataForm,
    DataList,
  },
};
</script>

<style scoped lang="less">
.message-area-container{
  margin-top: 60px;
}
.loading {
  position: relative;
  height: 100px;
}
</style>
