<template>
    <h4>demo</h4>
    <p>
      sum: {{sum}}
    </p>
    <button @click="sum++">sum++</button>
    <hr>
    <h3>mouse point: x: {{point.x}}, y: {{point.y}}</h3>
</template>

<script>
import { ref } from "vue";
import usePoint from "../hooks/usePoint";
export default {
  name: "Demo",
  setup() {
    let sum = ref(0);
    let point = usePoint();
    return {
      sum,
      point,
    };
  },
};
</script>