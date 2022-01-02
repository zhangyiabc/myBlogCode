import "./mock/index"
import Vue from 'vue'
import App from './App.vue'
import "./styles/global.less"
import store from "./store/index"
import router from "./router/index.js"

import {
  showMessage
} from "./utils/index"
import "./api/banners.js"

//指令
import VLazy from "./directives/lazy"
import Vloading from "./directives/loading.js"
import "./eventBus";

Vue.prototype.$showMessage = showMessage;
//自定义指令
Vue.directive("loading", Vloading);
Vue.directive("lazy",VLazy)
const vm = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

store.dispatch("banner/fetchBanners")
store.dispatch("setting/fetchSettings")
console.log(store)
// console.log(vm)
//测试
// import * as apiBlog from "./api/blog.js"
// apiBlog.getBlogTypes().then(r => {
//   console.log("博客分类",r)
// })
// apiBlog.getBlogs(2,20,10).then(r => {
//   console.log("博客",r)
// })

// 测试api代码
// apiBlog.getComments("abcd").then(r => {
//   console.log(r)
// });
// apiBlog.getBlog("adasda").then(r=>{console.log(r)})
// apiBlog.postComment({
//   nickname: "昵称",
//   content: "评论内容，纯文本",
//   blogId: 'abcabc'
// }).then(r => {
//   console.log(r)
// })


// import eventBus from "./eventBus";

// function fn1(data) {
//   console.log(`fn1----${data}`)
// }

// function fn2(data) {
//   console.log(`fn2----${data}`)
// }
// eventBus.$on("event1", fn1);
// eventBus.$on("event1", fn2);

// eventBus.$on("event2", fn1);

// window.eventBus = eventBus;
// window.fn1 = fn1;
// window.fn2 = fn2;