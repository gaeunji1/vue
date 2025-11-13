<script>
export default {
  props: ["name", "age"],
  created() {
    console.log(this.name);
  },
  methods: {
    propsUdater() {
      this.age = 30;
    },
  },
};
</script>
<template>
  <h1>Child component</h1>
  <p>Name:{{ name }}</p>
  <p>Age:{{ age }}</p>
  <button @click="propsUdater">클릭</button>
</template>
