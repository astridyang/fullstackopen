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
let myVnode1 = h(
  "a",
  { props: { href: "https://google.com", target: "_blank" } },
  "google"
);
// console.log(myVnode1)
const myVnode2 = h("div", "a container");
const myVnode3 = h("ul", [h("li", "apple"), h("li", h("p", "orange"))]);
console.log(myVnode3)
// 让虚拟节点上树
const container = document.getElementById("container");
patch(container, myVnode3);
