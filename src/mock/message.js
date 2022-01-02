import Mock from "mockjs";
import qs from "querystring";

Mock.mock("/api/message", "post", (msgInfo) => {
  const query = JSON.parse(msgInfo.body)

  return Mock.mock({
    code: 0,
    msg: "",
    data: {
      id: "@guid",
      nickname: `${query.nickname}`,
      content: `${query.content}`,
      createDate: Date.now(),
      "avatar|1": [
        "https://img2.woyaogexing.com/2021/05/29/94383c8406a542ba92ebc28de56d9969!400x400.jpeg",
        "https://img2.woyaogexing.com/2021/05/29/39a2d549879a4e8ab2f00baaa1bfe909!400x400.jpeg",
        "https://img2.woyaogexing.com/2021/05/29/cc43915def7045febfae74cc90cc443b!400x400.jpeg",
        "https://img2.woyaogexing.com/2021/05/26/5515e7ea557e49fc91d4175c568f793c!400x400.jpeg",
        "https://inews.gtimg.com/newsapp_bt/0/13587567137/641",
        "https://inews.gtimg.com/newsapp_bt/0/13587567007/641",
        "https://inews.gtimg.com/newsapp_bt/0/13587567148/641",
        "https://mmbiz.qpic.cn/mmbiz_jpg/gK3EibPnpOKYk18wRqaCDqNgZf9Iicv1ccnZSjJrhia6y86YwtunzZLmwyh1roMgmtZN51EP0aBSp32ibSNlicMNXFg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",
        "https://mmbiz.qpic.cn/mmbiz_jpg/CMl2lTbU3TibB0iaibjxic1PHlYm0f63FiafLBH9BELhToOyvdU7TLJzlnGvnHvph1mFJtUvkN7ibh6eiaoBVWvXQVu3A/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",
        "https://mmbiz.qpic.cn/mmbiz_jpg/3SiayP0xiaO4S4gIwwiahfEv4xDjq0l5Na9W4AUxv3y2T6IXqYzUia48u8HwPwOCpyjnoOpFLC7W4cJdEOOia2AoRtw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",
        "https://mmbiz.qpic.cn/mmbiz_jpg/3SiayP0xiaO4S4gIwwiahfEv4xDjq0l5Na96ydyOXXYOGeT7KVibBLJGCbcJDjC0b3flmxIP7RfNzU5obxpJ3zItog/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",
        "https://mmbiz.qpic.cn/mmbiz_jpg/CMl2lTbU3TibB0iaibjxic1PHlYm0f63FiafLHasial7OGnb54BVISCdNEdkI0kddM6gTgibGia651XHDgcKPiat8o2Hfyw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",
        "https://mmbiz.qpic.cn/mmbiz_jpg/3SiayP0xiaO4S4gIwwiahfEv4xDjq0l5Na9PUSgGWYAIS3o9Bbicnp1zic7ekD0W94YjhgD4YeWiaGe1Wr8yO5vMeSTg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",
        "https://pics2.baidu.com/feed/b64543a98226cffcaa9bbee9f1799a96f703eab3.jpeg?token=99bafe934f8d5948be9b5cacfd50c5e5"
      ],
    },
  })
});

Mock.mock(/^\/api\/message\/?(\?.+)?$/, "get", function (options) {
  const query = qs.parse(options.url);
  // console.log(query)
  return Mock.mock({
    code: 0,
    msg: "",
    data: {
      total: 52,
      [`rows|${query.limit || 10}`]: [{
        id: "@guid",
        nickname: "@cname",
        content: "@cparagraph(1, 10)",
        createDate: Date.now(),
        "avatar|1": [
          "https://img2.woyaogexing.com/2021/05/29/94383c8406a542ba92ebc28de56d9969!400x400.jpeg",
          "https://img2.woyaogexing.com/2021/05/29/39a2d549879a4e8ab2f00baaa1bfe909!400x400.jpeg",
          "https://img2.woyaogexing.com/2021/05/29/cc43915def7045febfae74cc90cc443b!400x400.jpeg",
          "https://img2.woyaogexing.com/2021/05/26/5515e7ea557e49fc91d4175c568f793c!400x400.jpeg",
          "https://inews.gtimg.com/newsapp_bt/0/13587567137/641",
          "https://inews.gtimg.com/newsapp_bt/0/13587567007/641",
          "https://inews.gtimg.com/newsapp_bt/0/13587567148/641",
          "https://mmbiz.qpic.cn/mmbiz_jpg/gK3EibPnpOKYk18wRqaCDqNgZf9Iicv1ccnZSjJrhia6y86YwtunzZLmwyh1roMgmtZN51EP0aBSp32ibSNlicMNXFg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",
          "https://mmbiz.qpic.cn/mmbiz_jpg/CMl2lTbU3TibB0iaibjxic1PHlYm0f63FiafLBH9BELhToOyvdU7TLJzlnGvnHvph1mFJtUvkN7ibh6eiaoBVWvXQVu3A/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",
          "https://mmbiz.qpic.cn/mmbiz_jpg/3SiayP0xiaO4S4gIwwiahfEv4xDjq0l5Na9W4AUxv3y2T6IXqYzUia48u8HwPwOCpyjnoOpFLC7W4cJdEOOia2AoRtw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",
          "https://mmbiz.qpic.cn/mmbiz_jpg/3SiayP0xiaO4S4gIwwiahfEv4xDjq0l5Na96ydyOXXYOGeT7KVibBLJGCbcJDjC0b3flmxIP7RfNzU5obxpJ3zItog/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",
          "https://mmbiz.qpic.cn/mmbiz_jpg/CMl2lTbU3TibB0iaibjxic1PHlYm0f63FiafLHasial7OGnb54BVISCdNEdkI0kddM6gTgibGia651XHDgcKPiat8o2Hfyw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",
          "https://mmbiz.qpic.cn/mmbiz_jpg/3SiayP0xiaO4S4gIwwiahfEv4xDjq0l5Na9PUSgGWYAIS3o9Bbicnp1zic7ekD0W94YjhgD4YeWiaGe1Wr8yO5vMeSTg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1"
        ],
      },],
    },
  });
});

 

class Animal {
  constructor(type, name, age, sex) {
      this.type = type;
      this.name = name;
      this.age = age;
      this.sex = sex;
  }
  //静态属性
  static height = 100;
  //静态方法
  static say(){
    console.log("静态方法")
  }
  //创建一个age属性，并给它加上getter，读取该属性时，会运行该函数
  get age() {
      return this._age + "岁";
  }

  //创建一个age属性，并给它加上setter，给该属性赋值时，会运行该函数
  set age(age) {
      if (typeof age !== "number") {
          throw new TypeError("age property must be a number");
      }
      if (age < 0) {
          age = 0;
      }
      else if (age > 1000) {
          age = 1000;
      }
      this._age = age;
  }

}