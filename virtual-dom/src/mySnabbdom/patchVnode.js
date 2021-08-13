import updateChildren from "./updateChildren";
export default function patchVnode(oldVnode, newVnode) {
  if (oldVnode === newVnode) return;
  // newVnode.elm = oldVnode.elm;
  if (
    newVnode.text != undefined &&
    (newVnode.children == undefined || newVnode.children.length == 0)
  ) {
    console.log("新节点有text");
    //新旧节点text不同，直接将新节点text写入旧节点元素的innerText，如果旧节点elm是children也会被覆盖
    if (newVnode.text !== oldVnode.text) {
      console.log("新旧节点text不同");
      oldVnode.elm.innerText = newVnode.text;
    }
  } else {
    console.log("新节点没有text");
    if (oldVnode.children != undefined && oldVnode.children.length > 0) {
      console.log("新旧节点都有children");
      updateChildren(oldVnode.elm, oldVnode.children, newVnode.children);
    } else {
      console.log(
        "旧节点没有children，清空旧节点elm的innerText，遍历新节点children，插入旧节点elm"
      );
      oldVnode.elm.innerText = "";
      for (let i = 0; i < newVnode.children.length; i++) {
        let chdom = createElement(newVnode.children[i]);
        oldVnode.elm.appendChild(chdom);
      }
    }
  }
  
  
}
