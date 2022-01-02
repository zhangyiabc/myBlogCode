<template>
  <div class="test-container">
    <div class="item" v-for="i in types" :key="i">
      <Icon :type="i" />
      <span>{{i}}</span>
    </div>
  </div>
</template>

<script>
  import Icon, {
    types
  } from "./index"
  export default {
    components: {
      Icon,
    },
    data() {
      return {
        types
      }
    }
  }
</script>

<style scoped>
.test-container {
  display: flex;
  justify-content: center;
  margin: 30px auto;
  width: 580px;
  flex-wrap: wrap;
}
.item {
  font-size: 22px;
  margin: 1em;
  text-align: center;
}
.icon-container {
  display: block;
}
span{
  font-size: 16px;
}
</style>>
