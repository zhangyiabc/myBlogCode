import request from "./request"
export async function getBlogs(page = 1, limit = 10, categoryid = -1) {
  // console.log(page,limit,categoryid)
  return await request.get("/api/blog", {
    params: {
      page,//页码
      limit,//页容量
      categoryid,//分类id
    },
  });
}
//获取博客分类
export async function getBlogTypes() {
  return await request.get("/api/blogtype");
}
//获取博客详情
export async function getBlog(id) {
  return await request.get(`/api/blog/${id}`)
}
//post 提交评论
export async function postComment(commentInfo) {
  return await request.post(`/api/comment`, commentInfo);

}

//get 获取评论数据
/**
 * 
 * @param {Number} blodId 文章id
 * @param {Number} page 当前页码
 * @param {Number} limit 页容量
 */
export async function getComments(blodId, page = 1, limit = 10) {
  return await request.get("/api/comment", {
    //以下是get请求参数
    params: {
      blodId,
      page,
      limit,
    }
  })
}