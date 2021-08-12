import { h } from "./mySnabbdom/h";
import patch from "./mySnabbdom/patch";
const vnode1 = h("ul", {}, [
  h('li', {key: 'A'}, 'A'),
  h('li', {key: 'B'}, 'B'),
  h('li', {key: 'C'}, 'C'),
  h('li', {key: 'D'}, 'D'),
  h('li', {key: 'E'}, 'E'),
]);
const vnode2 = h("ul", {}, [
  h('li', {key: 'Q'}, 'Q'),
  h('li', {key: 'T'}, 'T'),
  h('li', {key: 'E'}, 'E'),
  h('li', {key: 'B'}, 'B'),
  h('li', {key: 'A'}, 'A'),
  h('li', {key: 'D'}, 'D'),
  h('li', {key: 'C'}, 'C'),
  h('li', {key: 'V'}, 'V'),
]);
const container = document.getElementById("container");
patch(container, vnode1);

const btn = document.getElementById("btn");
btn.onclick = function () {
  patch(vnode1, vnode2);
};
