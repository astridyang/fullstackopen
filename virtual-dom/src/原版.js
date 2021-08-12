import {
  init,
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
  h,
} from "snabbdom";
// 创建patch函数
const patch = init([
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
]);
// 创建虚拟节点
let vnode1 = h("ul", {}, [h("li", {}, "a"), h("li", {}, "b")]);
const container = document.getElementById("container");
patch(container, vnode1);
const btn = document.getElementById("btn");
let vnode2 = h("ul", {}, [
  h("li", {}, "c"),
  h("li", {}, "a"),
  h("li", {}, "b"),
]);
btn.onclick = function () {
  patch(vnode1, vnode2);
};
