<template>
    <h4>demo</h4>
    <p>{{person}}</p>
    <p>name: {{name}}</p>
    <p>age: {{age}}</p>
    <p>salary: {{job.job1.salary}}k</p>
    <p>
        <button @click="name+='~'">change name</button>
        <button @click="age++">add age</button>
        <button @click="job.job1.salary++">add salary</button>
    </p>
</template>

<script>
import {reactive, toRefs } from "vue";
export default {
  name: "Demo",
  setup() {
    let person = reactive({
      name: "bb",
      age: 13,
      job: {
        job1: {
          salary: 20,
        },
      },
    });

    return {
      person,
      ...toRefs(person)
    };
  },
};
</script>