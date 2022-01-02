import {
  getSettings
} from "../api/setting"
import setTitle from "../utils/setTitle"
export default {
  namespaced: true, //开启命名空间

  state: {
    loading: false,
    data: []
  },

  mutations: {
    setLoading(state, payload) {
      state.loading = payload
    },
    setData(state, payload) {
      state.data = payload
    }
  },
  actions: {
    async fetchSettings(ctx) {
      ctx.commit("setLoading", true);
      const resp = await getSettings();
      ctx.commit("setData", resp)
      ctx.commit("setLoading", false);
      if (resp.favicon) {
        // <link rel="shortcut icon " type="images/x-icon" href="./favicon.ico">
        let link = document.querySelector("link[rel='icon']");
        if (!link) {
          //如果没有值
          link = document.createElement("link");
          link.rel = "shortcut icon";
          link.type = "images/x-icon";
          link.href = resp.favicon;
          document.querySelector("head").appendChild(link)
        } else {
          return;
        }
      };
      if(resp.siteTitle){
        setTitle.setSiteTitle(resp.siteTitle)
      }

    }
  }
}