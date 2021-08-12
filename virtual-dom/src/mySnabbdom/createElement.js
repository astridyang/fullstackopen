/**
 * 为虚拟节点创建dom节点返回
 * @param {*} vnode 虚拟节点
 * @returns dom节点
 */
export default function createElement(vnode) {
  let domNode = document.createElement(vnode.sel);
  if (
    vnode.text != "" &&
    (vnode.children == undefined || vnode.children.length == 0)
  ) {
    // console.log('create: has text')
    domNode.innerText = vnode.text;
    // pivot.parentNode.insertBefore(domNode, pivot);
  } else if (Array.isArray(vnode.children) && vnode.children.length > 0) {
    // console.log('create: has children array')
    for (let i = 0; i < vnode.children.length; i++) {
      let ch = vnode.children[i];
      // 创建children的dom
      let chdom = createElement(ch);
      domNode.appendChild(chdom);
    }
  }
  vnode.elm = domNode;
  // 纯dom对象
  return vnode.elm;
}
