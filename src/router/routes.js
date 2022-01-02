import "nprogress/nprogress.css";
import { start, done, configure } from "nprogress";

configure({
  trickleSpeed: 20
})
window.start = start;
window.done = done;
function delay(duraction) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duraction);
  })
}

function getPageComponent(pageFun) {
  return async () => {
    // console.log("组件开始加载");
    start()
    if (process.env.NODE_ENV == 'development') {
      await delay(Math.floor(Math.random() * 2000 + 500))
    }
    const page = await pageFun();
    // console.log("组件加载结束");
    done();
    return page;
  }
}

export default [{
  name: "Home",
  path: "/",
  component: getPageComponent(() => import("@/views/Home")),
  meta: {
    title: "首页"
  }
},
{
  // name: "Home",
  path: "/myblog", 
  redirect:"/",
  // component: getPageComponent(() => import("@/views/Home")),
  // meta: {
  //   title: "首页"
  // }
},
{
  name: "About",
  path: "/about",
  component: getPageComponent(() => import("@/views/About")),
  meta: {
    title: "关于我"
  }
},
{
  name: "Blog",
  path: "/blog",
  component: getPageComponent(() => import("@/views/Blog")),
  meta: {
    title: "文章"
  }
},
{
  name: "CategoryBlog",
  path: "/blog/cate/:categoryId",
  component: getPageComponent(() => import("@/views/Blog")),
  meta: {
    title: "文章"
  }
},
{
  name: "BlogDetail",
  path: "/blog/:id",
  component: getPageComponent(() => import("@/views/Blog/Detail")),
  meta: {
    title: "文章详情"
  }
},
{
  name: "Project",
  path: "/project",
  component: getPageComponent(() => import("@/views/Project")),
  meta: {
    title: "项目&效果"
  }
},
{
  name: "Message",
  path: "/message",
  component: getPageComponent(() => import("@/views/Message")),
  meta: {
    title: "留言板"
  }
},
];