<template>
  <div>
    <h1>parent component</h1>
  </div>
</template>

<script>
import { isProxy, isReactive, isReadonly, isRef, provide, reactive, readonly, ref } from "@vue/runtime-core";
export default {
  setup() {
    let car = reactive({
      name: "mini",
      price: "40w",
    });
    let sum = ref(0)
    let car2 = readonly(car)
    console.log(isRef(sum))
    console.log(isReactive(car))
    console.log(isReadonly(car2))
    console.log(isProxy(car2))
    console.log(isProxy(sum))
  },
};
</script>

<style>
div {
  background: gray;
  padding: 10px;
}
</style>