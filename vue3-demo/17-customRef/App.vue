<template>
    <input type="text" v-model="msg">
    <h3>{{msg}}</h3>
</template>

<script>
import Demo from './components/Demo.vue'
import {customRef, ref} from 'vue'
export default {
  name: 'App',
  components: {
    Demo
  },
  setup(){
    function myRef(value, delay){
      let timer = null
      return customRef((track, trigger)=>{
        return {
          get(){
            console.log(`someone read from customRef ${value}`)
            track()
            return value
          },
          set(newValue){
            console.log(`someone use customRef change ${value}`)
            clearTimeout(timer)
            setTimeout(()=>{
              value = newValue
              trigger()
            }, delay)
          }
        }
      })
    }
    // let msg = ref('hello')
    let msg = myRef('hello', 500)
    return {
      msg
    }
  }
}
</script>

