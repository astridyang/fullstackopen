<template>
    <h4>demo</h4>
    <p>currrent y: {{x.y}}</p>
    <p>
      <button @click="x={y:99}">change x</button>
    </p>
    <hr>
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
import {toRefs, shallowReactive, shallowRef } from "vue";
export default {
  name: "Demo",
  setup() {
    let person = shallowReactive({
      name: "bb",
      age: 13,
      job: {
        job1: {
          salary: 20,
        },
      },
    });
    let x = shallowRef({
      y: 0,
    })
    return {
      person,
      x,
      ...toRefs(person)
    };
  },
};
</script>