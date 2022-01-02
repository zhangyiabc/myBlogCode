<template>
  <Layout>
    <template #main>
      <BlogList />
    </template>
    <template #right>
      <BlogCategory />
    </template>
    
  </Layout>
</template>

<script>
  import Layout from "@/components/Layout/index"
  import BlogList from "./components/BlogList"
  import BlogCategory from "./components/BlogCategory"


  export default {
    components: {
      Layout,
      BlogList,
      BlogCategory
    },
    
    // data(){
    //   return {
    //     list: [
    //       { name: "a", isSelect: false },
    //       { name: "b", isSelect: false },
    //       {
    //         name: "c",
    //         isSelect: true,
    //         children: [
    //           { name: "c-1", isSelect: false },
    //           {
    //             name: "c-2",
    //             isSelect: false,
    //             children: [
    //               { name: "c-2-1", isSelect: false },
    //               { name: "c-2-2", isSelect: false },
    //               { name: "c-2-3", isSelect: false },
    //               { name: "c-2-4", isSelect: false },
    //             ],
    //           },
    //           { name: "c-3", isSelect: false },
    //           { name: "c-4", isSelect: false },
    //         ],
    //       },
    //       { name: "d", isSelect: false },
    //     ],
    //   }
    // }
  }
</script>

<style>

</style>