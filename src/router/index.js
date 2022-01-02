import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter); //使用一个插件
import routes from "./routes"
import {setTitle} from "../utils"


const router = new VueRouter({
  // 配置
  routes, // 路由匹配规则
  mode: "history",//路由方式
});
router.afterEach((to,from)=>{
  // console.log(to.meta.title);
  setTitle.setRouteTitle(to.meta.title)
})

export default router;
