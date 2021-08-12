import { vnode } from "./vNode";
export function h(sel, data, c) {
  if (arguments.length != 3) {
    throw new Error("sorry, h function needs 3 arguments.");
  }
  if (typeof c === 'number' || typeof c === 'string') {
    return vnode(sel, data, undefined, c, undefined);
  }else if(Array.isArray(c)){
    let children = []
    for(let i = 0;i<c.length;i++){
      if(!(typeof c[i] === 'object' && c[i].hasOwnProperty('sel'))){
        throw new Error('There are not h function in the third argument')
      }
      children.push(c[i])
    }
    return vnode(sel, data, children, undefined, undefined)
  }else if(typeof c === 'object' && c.hasOwnProperty('sel')){
    let children = [c]
    return vnode(sel, data, children, undefined, undefined)
  }else{
    throw new Error('error arguments')
  }
}
