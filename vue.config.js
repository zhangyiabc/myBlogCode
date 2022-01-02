module.exports = {
  devServer: {
    port: 8848,
    proxy: {
      "/simpleWeather": {
        target: "http://apis.juhe.cn"
      },
      "/api": {
        target: "http://zy.xyz"
      }
    },
    open: true,
    stats: {
      colors: true, // 打包时使用不同的颜色区分信息
      modules: false, // 打包时不显示具体模块信息
      entrypoints: false, // 打包时不显示入口模块信息
      children: false, // 打包时不显示子模块信息
    },
  },
  publicPath: "/myblog/"
}