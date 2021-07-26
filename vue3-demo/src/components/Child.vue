<template>
  <div class="child">
    <h2>Child component</h2>
    <Offsprint></Offsprint>
  </div>
</template>

<script>
import Offsprint from "./Offsprint.vue";
export default {
  name: "Child",
  components: {
    Offsprint,
  },
};
</script>

<style>
.child {
  background: hotpink;
  padding: 10px;
}
</style>