<template>
  <div>
    <h1>parent component</h1>
    <Child></Child>
  </div>
</template>

<script>
import { provide, reactive } from "@vue/runtime-core";
import Child from './components/Child.vue'
export default {
  components:{
    Child
  },
  setup() {
    let car = reactive({
      name: "mini",
      price: "40w",
    });
    provide("car", car);
  },
};
</script>

<style>
div {
  background: gray;
  padding: 10px;
}
</style>