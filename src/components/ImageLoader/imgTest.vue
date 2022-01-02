<template>
  <div class="test-container">
    <ImageLoader 
	src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
  placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100" :duration="2000"
  @everyLoad = "cbLoad"
  />
  </div>
</template>

<script>
  import ImageLoader from "./img.vue"
  export default {
    components:{
      ImageLoader,
    },
    methods:{
      cbLoad(){
        console.log("所有事情已经完成，你想做什么事件可以做了")
      }
    }
  }
</script>

<style scoped>
  .test-container{
    width: 800px;
    height: 500px;
    margin: 0 auto;
  }
</style>