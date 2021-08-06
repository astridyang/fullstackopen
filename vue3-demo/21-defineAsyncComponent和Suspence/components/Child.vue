<template>
  <div class="child">
    <h2>Child component</h2>
    <p>{{sum}}</p>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Child",
  setup() {
    let sum = ref(0);
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        resolve({sum})
      }, 2000)
    })
  },
};
</script>

<style>
.child {
  background: hotpink;
  padding: 10px;
}
</style>