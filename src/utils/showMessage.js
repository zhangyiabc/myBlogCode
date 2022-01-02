import getComponentDom from "./getComponentDom.js"
import Icon from "@/components/Icon/index";
import styles from "../styles/message.module.less"
/**
 * 弹出消息方法
 * @param {String} content 消息内容
 * @param {String} type 消息类型：success,warn,error,info
 * @param {Number} duration 多久之后消失
 * @param {HTML} container 容器，消息会显示到该容器里面
 * @param {Function} callback 回调函数
 */
//问题 如何获取图标
export default function (options) {
  //解构 && 并设置默认值
  let {
    content,
    type = "info",
    duration = 1000,
    container ,
    callback = () => {}
  } = options;


  let div = document.createElement("div");
  let iconDom = getComponentDom(Icon, {
    type: type,
  })
  div.innerHTML = `<span>${iconDom.outerHTML}</span><div>${content}</div>`;

  //设置样式
  let typeClassName = styles[`message-${type}`];
  div.className = `${styles.message} ${typeClassName}`
  //检查是否改动过position
  if(container){
    if (getComputedStyle(container).position === "static") {
      container.style.position = "relative";
    }
  }else{
    container = document.body;
  }
  //插入容器中
  container.appendChild(div);

  //强行渲染
  div.offsetHeight;
  //回归正常位置
  div.style.opacity = 1;
  div.style.transform = `translate(-50%, -50%)`;

  //一段时间后消失
  setTimeout(() => {
    div.style.opacity = 0;
    div.style.transform = `translate(-50%, -50%) translateY(-25px)`;
    div.addEventListener("transitionend", () => {
      div.remove();
      callback && callback();
    }, {
      once: true
    })

  }, duration)


}