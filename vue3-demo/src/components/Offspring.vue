<template>
  <div class="offspring">
    <h3>Offspring component</h3>
    <Dialog></Dialog>
  </div>
</template>

<script>
import { inject,toRefs } from '@vue/runtime-core'
import Dialog from './Dialog.vue'
export default {
  name:'Offspring',
  components:{Dialog},
  setup(){
    let car = inject('car')
    return{
      ...toRefs(car)
    }
  }
}
</script>

<style>
  .offspring{
    background: orange;
    padding: 10px;
  }
</style>