import patchVnode from "./patchVnode";
import createElement from "./createElement";
function checkSameVnode(a, b) {
  // console.log('check same: ', a,b)
  return a.sel == b.sel && a.key == b.key;
}
function createKeyMap(oldCh, oldStartIdx, oldEndIdx) {
  let keyMap = new Map();

  return keyMap;
}
export default function updateChildren(parentNode, oldCh, newCh) {
  // console.log(oldCh, newCh);
  let newStartIdx = 0;
  let newEndIdx = newCh.length - 1;
  let oldStartIdx = 0;
  let oldEndIdx = oldCh.length - 1;

  let newStartVnode = newCh[0];
  let newEndVnode = newCh[newEndIdx];
  let oldStartVnode = oldCh[0];
  let oldEndVnode = oldCh[oldEndIdx];
  let keyMap = null;
  while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    // console.log("dead loop...");
    if (!oldStartVnode) {
      oldStartVnode = oldCh[++oldStartIdx];
    } else if (!oldEndVnode) {
      oldEndVnode = oldCh[--oldEndIdx];
    } else if (!newStartVnode) {
      newStartVnode = newCh[++newStartIdx];
    } else if (!newEndVnode) {
      newEndVnode = newCh[--newEndIdx];
    } else if (checkSameVnode(newStartVnode, oldStartVnode)) {
      console.log("1.新前和旧前命中");
      patchVnode(oldStartVnode, newStartVnode);
      newStartVnode = newCh[++newStartIdx];
      oldStartVnode = oldCh[++oldStartIdx];
    } else if (checkSameVnode(newEndVnode, oldEndVnode)) {
      console.log("2.新后和旧后命中");
      patchVnode(oldEndVnode, newEndVnode);
      newEndVnode = newCh[--newEndIdx];
      oldEndVnode = oldCh[--oldEndIdx];
    } else if (checkSameVnode(newEndVnode, oldStartVnode)) {
      console.log("3.新后和旧前命中");
      patchVnode(oldStartVnode, newEndVnode);
      // 移动与新后节点命中节点到旧后节点的后面
      // 不能用appendchild，旧后不一定是最后一个子节点；
      // insertBefore如果第二个参数是null，自动插入到队尾，插入已经在dom树上的节点，就会被移动
      parentNode.insertBefore(oldStartVnode.elm, oldEndVnode.elm.nextSibling);
      newEndVnode = newCh[--newEndIdx];
      oldStartVnode = oldCh[++oldStartIdx];
    } else if (checkSameVnode(newStartVnode, oldEndVnode)) {
      console.log("4.新前和旧后命中");
      patchVnode(oldEndVnode, newStartVnode);
      // 移动与新前节点命中节点到旧前节点的前面
      parentNode.insertBefore(oldEndVnode.elm, oldStartVnode.elm);
      newStartVnode = newCh[++newStartIdx];
      oldEndVnode = oldCh[--oldEndIdx];
    } else {
      console.log("都没有匹配");
      if (!keyMap) {
        keyMap = {}
        for (let i = oldStartIdx; i <= oldEndIdx; i++) {
          const key = oldCh[i]?.key;
          if (key != undefined) {
            keyMap[key] = i;
          }
        }
      }
      // let keyMap = createKeyMap(oldCh, oldStartIdx, oldEndIdx);
      let idxInOld = keyMap[newStartVnode.key];
      if (idxInOld == undefined) {
        console.log("在oldch找不到，表示是全新的项");
        parentNode.insertBefore(
          createElement(newStartVnode),
          oldStartVnode.elm
        );
      } else {
        const elmToMove = oldCh[idxInOld];
        patchVnode(elmToMove, newStartVnode);
        // 把旧节点设置为undefined
        oldCh[idxInOld] = undefined;
        // 移动节点到旧前节点之前
        parentNode.insertBefore(elmToMove.elm, oldStartVnode.elm);
      }
      // newch指针下移
      newStartVnode = newCh[++newStartIdx];
    }
  }
  if (newStartIdx <= newEndIdx) {
    console.log("newch有剩余，全部插入到旧前节点之前");
    const before = newCh[newEndIdx + 1] == null ? null:newCh[newEndIdx + 1].elm
    console.log('before: ', before)
    for (let i = newStartIdx; i <= newEndIdx; i++) {
      // parentNode.insertBefore(createElement(newCh[i]), null);
      parentNode.insertBefore(createElement(newCh[i]), before);
    }
  } else if (oldStartIdx <= oldEndIdx) {
    console.log("oldch有剩余，批量删除");
    for (let i = oldStartIdx; i <= oldEndIdx; i++) {
      if (oldCh[i]) {
        parentNode.removeChild(oldCh[i].elm);
      }
    }
  }
}
