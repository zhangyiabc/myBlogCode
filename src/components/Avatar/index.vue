<template>
 <img
    class="avatar-container"
    :src="url"
    :style="{
      width: size + 'px',
      height: size + 'px',
    }"
  />
</template>

<script>
  export default {
    props: {
      url: {
        type: String,
        required: true, //表明这条属性必须传
      },

      size: {
        type: Number,
        default: 250 //默认值

      },

    },
  };
</script>

<style scoped>
  /* scoped 加了这条属性，会在元素上设置一个作用域，css module  避免样式冲突 */
  .avatar-container {
    border-radius: 50%;
    object-fit: cover;
    display: block;
  }
</style>