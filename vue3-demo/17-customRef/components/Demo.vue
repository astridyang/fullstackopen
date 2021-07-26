<template>
    <h4>demo</h4>
    <p>currrent y: {{x.y}}</p>
    <p>
      <button @click="x={y:99}">change x</button>
    </p>
    <hr>
    <p>name: {{name}}</p>
    <p>age: {{age}}</p>
    <p>salary: {{job.job1.salary}}k</p>
    <p>car: {{person.car}}</p>
    <p>
        <button @click="name+='~'">change name</button>
        <button @click="age++">add age</button>
        <button @click="job.job1.salary++">add salary</button>
    </p>
    <p><button @click="addCar">add car</button> <button @click="person.car.name+='~'">change car name</button></p>
</template>

<script>
import {toRefs,ref,reactive, toRaw, markRaw} from "vue";
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
    let p = toRaw(person)
    console.log('person toRaw: ', p)

    function addCar(){
      let car = {name: 'farari', price: 40}
      person.car = markRaw(car)
    }
    let x = ref(0)
    return {
      person,
      addCar,
      x,
      ...toRefs(person)
    };
  },
};
</script>