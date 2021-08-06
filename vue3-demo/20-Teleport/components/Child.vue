<template>
  <div class="child">
    <h2>Child component</h2>
    <Offspring></Offspring>
  </div>
</template>

<script>
import Offspring from "./Offspring.vue";
export default {
  name: "Child",
  components: {
    Offspring,
  },
};
</script>

<style>
.child {
  background: hotpink;
  padding: 10px;
}
</style>