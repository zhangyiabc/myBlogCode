import Mock from "mockjs";
Mock.mock("/api/setting", "get", ()=>{
  return {
    code: 0,
    msg: "",
    data: {
      avatar: "http://www.duyiedu.com/source/img/logo.png",
      siteTitle: "张益达的个人空间",
      github: "https://github.com/zhangyiabc",
      qq: "1120768996",
      qqQrCode:
        "http://www.duyiedu.com/source/img/%E5%B0%8F%E6%B8%A1%E5%BE%AE%E4%BF%A1%E4%BA%8C%E7%BB%B4%E7%A0%81.png",
      weixin: "qwxz20",
      weixinQrCode:
        "http://www.duyiedu.com/source/img/%E5%85%AC%E4%BC%97%E5%8F%B7%E4%BA%8C%E7%BB%B4%E7%A0%81.png",
      mail: "1120768996@qq.com",
      icp: "黑ICP备17001719号",
      githubName: "zhangyiabc",
      favicon: "https://pics5.baidu.com/feed/8435e5dde71190ef43677464ff06cc10fcfa6094.jpeg?token=6527193d61bc892f7056341d1162e368&s=27D073DF62A4371DC9044D0603007062",
    },
  }
});