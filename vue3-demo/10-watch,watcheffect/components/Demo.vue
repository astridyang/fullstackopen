<template>
    <h4>demo</h4>
    <p>sum: {{sum}}</p>
    <p><button @click="sum++">sum++</button></p>
    <br>
    <p>name: {{person.name}}</p>
    <p>age: {{person.age}}</p>
    <p>salary: {{person.job.job1.salary}}k</p>
    <p>
        <button @click="person.name+='~'">change name</button>
        <button @click="person.age++">add age</button>
        <button @click="person.job.job1.salary++">add salary</button>
    </p>
</template>

<script>
import { reactive, watch, ref, watchEffect } from "vue";
export default {
  name: "Demo",
  setup() {
    let sum = ref(0);
    let person = reactive({
      name: "bb",
      age: 13,
      job: {
        job1: {
          salary: 20,
        },
      },
    });
    watchEffect(() => {
      const x1 = sum.value;
      const x2 = person.job.job1.salary;
      console.log("some value change");
    });
    //#region
    // watch(person, (newValue, oldValue)=>{
    //     console.log('person change ', newValue, oldValue)
    // })
    // watch(()=>person.name, (newValue, oldValue)=>{
    //     console.log('person change ', newValue, oldValue)
    // })
    // watch(()=>person.job, (newValue, oldValue)=>{
    //     console.log('person change ', newValue, oldValue)
    // }, {deep: true})
    // ref对象，watch用person.value或者开启{deep: true}
    // let person = ref({
    //   name: "bb",
    //   age: 13,
    //   job: {
    //     job1: {
    //       salary: 20,
    //     },
    //   },
    // });
    // watch(person.value, (newValue, oldValue)=>{
    //     console.log('person change ', newValue, oldValue)
    // })
    // watch(person, (newValue, oldValue)=>{
    //     console.log('person change ', newValue, oldValue)
    // }, {deep: true})
    //#endregion
    return {
      sum,
      person,
    };
  },
};
</script>