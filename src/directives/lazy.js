import eventBus from "../eventBus"
import debounce from "../utils/debounce"
import gif from "@/assets/default.gif"
let imgArr = [];

function setImage(img) {
  img.dom.src = gif;
  //视口高度
  const clientHeight = document.documentElement.clientHeight;
  const rect = img.dom.getBoundingClientRect()
  const height = rect.height || 115;
  if (rect.top >= -height && rect.top <= clientHeight) {
    //在视口范围
    const tempImg = new Image();
    tempImg.onload = function () {
      //真实图片加载完成后执行
      // console.log("加载完成")
      // console.log(tempImg.src)
      img.dom.src = tempImg.src
    }
    tempImg.src = img.src;

    // console.log("加载真实图片-------", img.dom.alt)
    //处理完成后从图片数组中删除处理过的img
    imgArr = imgArr.filter((i) => i !== img)
  }

}

function setImages() {
  for (const img of imgArr) {
    setImage(img)
  }
}

function handleScroll() {
  setImages()
}

eventBus.$on("mainScroll", debounce(handleScroll, 50))
export default {
  inserted(el, binding) {
    const imgInfo = {
      dom: el,
      src: binding.value
    }
    /**
     * {
     * def: {bind: ƒ}
        expression: "`${item.thumb}`"
        modifiers: {}
        name: "lazy"
        rawName: "v-lazy"
        value: "http://dummyimage.com/300x250/79f2b2/f28f79&text=dyflb"
     * }
     */
    imgArr.push(imgInfo);
    setImages()
  },
  unbind(el) {
    //切换到其他组件时自动销毁图片数组
    imgArr = imgArr.filter((img) => img.dom !== el);
  }
}