<script>
import ChildCom from "./components/ChildComponent.vue";
export default {
  data() {
    return {
      name: "John",
      age: 30,
    };
  },
  methods: {
    ageInc() {
      this.age++;
    },
  },
  components: {
    ChildCom,
  },
};
</script>

<template>
  <h1>나는 부모</h1>
  <button @click="ageInc">age++</button>
  <ChildCom v-bind:name="name" v-bind:age="age" />
</template>

<style></style>
