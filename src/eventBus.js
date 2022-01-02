// // import vue from "vue"
// const listenersObj = {};
// //监听一个事件 一个事件可以有多个处理函数进行处理
// //事件名
// //事件处理函数
// export default {
//   //监听一个事件，将有关于他的处理函数进行映射
//   /**
//    * event1:fn1,fn2
//    * event2:fn1,fn2,fn3
//    */

//   /**
//    * 监听事件
//    * @param {*} eventName 事件名称
//    * @param {*} fn 处理函数
//    */
//   $on(eventName, fn) {
//     //先判断是否有该事件，做到不重复
//     if (!listenersObj[eventName]) {
//       listenersObj[eventName] = new Set();
//     }
//     listenersObj[eventName].add(fn)
//   },
//   /**
//    * 取消监听 ---取消一个事件的处理函数继续监听下去
//    * @param {*} eventName 
//    * @param {*} fn 
//    */
//   $off(eventName, fn) {
//     //先确定该事件存在
//     if (!listenersObj[eventName]) {
//       return
//     }
//     listenersObj[eventName].delete(fn)
//   },

//   /**
//    * 触发事件
//    * @param {*} eventName 
//    * @param  {...any} args 触发事件所需参数
//    * @returns 
//    */
//   $emit(eventName, ...args) {
//     //先确定该事件存在
//     if (!listenersObj[eventName]) {
//       return
//     }
//     for (const fn of listenersObj[eventName]) {
//       fn(...args)
//     }
//   }

// }


import Vue from "vue";
const app =new Vue({})
Vue.prototype.$bus = app;
export default app