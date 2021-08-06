<template>
  <button @click="isShow = true">open dialog</button>
  <Teleport to="body">
    <div class="mask" v-if="isShow">
    <div class="dialog">
      <div class="title">title</div>
      <div class="content">content</div>
      <button @click="isShow = false">close dialog</button>
    </div>
  </div>
  </Teleport>
</template>

<script>
import { ref, Teleport } from "vue";
export default {
  setup() {
    let isShow = ref(false);
    return { isShow };
  },
};
</script>

<style>
.dialog {
  background: lightblue;
  width: 300px;
  height: 200px;
  text-align: center;
  padding: 50px 0;
}
</style>