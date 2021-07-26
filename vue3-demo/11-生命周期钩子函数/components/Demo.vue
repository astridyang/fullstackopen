<template>
    <h4>demo</h4>
    <p>
      sum: {{sum}}
    </p>
    <button @click="sum++">sum++</button>
</template>

<script>
import {
  reactive,
  watch,
  ref,
  watchEffect,
  onBeforeMount,
  onMounted,
} from "vue";
export default {
  name: "Demo",
  setup() {
    let sum = ref(0);
    onBeforeMount(() => {
      console.log("---onBeforeMount---");
    });
    onMounted(() => {
      console.log("---onMounted---");
    });
    return {
      sum,
    };
  },
  beforeCreate() {
    console.log("---beforeCreate---");
  },
  created() {
    console.log("---created---");
  },
  // beforeMount(){
  //   console.log("---beforeMount---")
  // },
  // mounted(){
  //   console.log("---mounted---")
  // },
  beforeUpdate() {
    console.log("---beforeUpdate---");
  },
  updated() {
    console.log("---updated---");
  },
  beforeUnmount() {
    console.log("---beforeUnmount---");
  },
  unmounted() {
    console.log("---unmounted---");
  },
};
</script>