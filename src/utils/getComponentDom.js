import Vue from "vue"
function getComponentDom(com,props){
  let vm = new Vue({
    render:h=>h(com,{props})
  });
  vm.$mount();//绑定一个空
  return vm.$el; //返回这个根节点
}
export default getComponentDom