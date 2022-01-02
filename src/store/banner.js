import {getBannerData} from "../api/banners"
export default {
  namespaced: true,//开启命名空间

  state: {
    loading:false,
    data:[]
  },

  mutations: {
    setLoading(state,payload){
      state.loading = payload
    },
    setData(state,payload){
      state.data = payload
    }
  },
  actions: {
    async fetchBanners(ctx){
      if(ctx.state.data.length){
        return
      }
      ctx.commit("setLoading",true);
      const resp = await getBannerData();
      ctx.commit("setData",resp)
      ctx.commit("setLoading",false);

    }
  }
}