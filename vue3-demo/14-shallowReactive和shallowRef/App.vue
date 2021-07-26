<template>
<button @click="showDemo = !showDemo">toggle demo</button>
  <Demo v-if="showDemo"></Demo>
</template>

<script>
import Demo from './components/Demo.vue'
import {ref} from 'vue'
export default {
  name: 'App',
  components: {
    Demo
  },
  setup(){
    let showDemo = ref(true)
    return {
      showDemo
    }
  }
}
</script>

