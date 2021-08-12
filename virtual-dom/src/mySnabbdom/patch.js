import { vnode } from "snabbdom";
import createElement from "./createElement";
import patchVnode from "./patchVnode";
export default function (oldVnode, newVnode) {
  if (oldVnode.sel === "" || oldVnode.sel === undefined) {
    console.log("旧节点不是虚拟节点，转成虚拟节点");
    oldVnode = vnode(
      oldVnode.tagName.toLowerCase(),
      {},
      [],
      undefined,
      oldVnode
    );
  }
  // 判断新旧节点是否为同一个，sel， key
  if (oldVnode.sel === newVnode.sel && oldVnode.key === newVnode.key) {
    console.log("新旧节点是同一个");
    // 新旧节点在内存中是不是同一个
    patchVnode(oldVnode, newVnode);
  } else {
    console.log("新旧节点不是同一个，创建新节点，删除旧节点");
    let newElm = createElement(newVnode);
    if (oldVnode.elm.parentNode && newElm) {
      oldVnode.elm.parentNode.insertBefore(newElm, oldVnode.elm);
    }
    oldVnode.elm.parentNode.removeChild(oldVnode.elm);
  }
}
