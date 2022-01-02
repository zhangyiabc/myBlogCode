import loadingUrl from "@/assets/loading.svg";
import styles from "./loading.module.less";
/**
 * 
 * @param {*} el 绑定指令的元素
 * @param {*} binding 
 */

//创建img元素
function createLoadingImg(){
  const imgDom = new Image();
  imgDom.dataset.role = "loading";
  imgDom.src = loadingUrl;
  imgDom.className =styles.loading;;
  return imgDom;

}

function getLoadingImage(el){
  return el.querySelector("img[data-role=loading]");

}

export default {
  bind(el, binding) {
    const curImg = getLoadingImage(el);
    if (binding.value) {
      if (!curImg) {
        const img = createLoadingImg();
        el.appendChild(img);
      }
    } else {
      if (curImg) {
        curImg.remove();
      }
    }
  },
  update(el, binding) {
    const curImg = getLoadingImage(el);
    if (binding.value) {
      if (!curImg) {
        const img = createLoadingImg();
        el.appendChild(img);
      }
    } else {
      if (curImg) {
        curImg.remove();
      }
    }
  }

}