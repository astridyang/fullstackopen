<template>
  <div class="offspring">
    <h3>Offsprint component</h3>
    <p>
      {{name}}---{{price}}
    </p>
  </div>
</template>

<script>
import { inject,toRefs } from '@vue/runtime-core'

export default {
  name:'Offsprint',
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