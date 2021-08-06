<template>
  <div class="app">
    <h1>parent component</h1>
    <Child></Child>
  </div>
</template>

<script>
import Child from './components/Child.vue'
export default {
  name:'App',
  components:{
    Child
  },
  setup() {
    
  },
};
</script>

<style>
.app {
  background: gray;
  padding: 10px;
}
</style>