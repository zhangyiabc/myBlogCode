<template>
  <div class="test-container">
    <SortList :list="list" @select="handleSelect"/>
  </div>
</template>

<script>
  import SortList from "./SortList"
  export default {
    components: {
      SortList,
    },
    data() {
      return {
        list: [{
            name: "a",
            isSelect: false
          },
          {
            name: "b",
            isSelect: false
          },
          {
            name: "c",
            isSelect: true,
            children: [{
                name: "c-1",
                isSelect: false
              },
              {
                name: "c-2",
                isSelect: false,
                children: [{
                    name: "c-2-1",
                    isSelect: false
                  },
                  {
                    name: "c-2-2",
                    isSelect: false
                  },
                  {
                    name: "c-2-3",
                    isSelect: false
                  },
                  {
                    name: "c-2-4",
                    isSelect: false
                  },
                ],
              },
              {
                name: "c-3",
                isSelect: false
              },
              {
                name: "c-4",
                isSelect: false
              },
            ],
          },
          {
            name: "d",
            isSelect: false
          },
        ]
      }
    },
    methods:{
      handleSelect(e){
        console.log(e)
      }
    }
  }
</script>

<style lang="less" scoped>

</style>