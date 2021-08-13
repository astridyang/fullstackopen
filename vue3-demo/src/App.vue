<template>
  <div class="app">
    <h1>parent component</h1>
    <Suspense>
      <template v-slot:default>
        <Child></Child>
      </template>
      <template v-slot:fallback>
        <p>loading...</p>
      </template>
    </Suspense>
  </div>
</template>

<script>
// import Child from './components/Child.vue'
import {defineAsyncComponent} from 'vue'
import axios from 'axios'

const Child = defineAsyncComponent(()=>import('./components/Child'))
export default {
  name:'App',
  components:{
    Child
  },
  setup() {
    axios.get('/api/students').then(response=>{
      console.log(response)
    })
  },
};
</script>

<style>
.app {
  background: gray;
  padding: 10px;
}
</style>