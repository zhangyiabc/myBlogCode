import Vue from "vue"
import Vuex from "vuex"
import banner from "./banner"
import setting from "./setting"

Vue.use(Vuex);
const store = new Vuex.Store({
  state:{},
  modules:{
    banner,
    setting
  },
  strict:true
});
export default store