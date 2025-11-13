<script>
export default {
  methods: {
    logInput() {
      console.log(this.$refs.myInput.value);
      // console.log(document.getElementById("myInput").value);
    },
  },
};
</script>

<template>
  <div>
    <input type="text" ref="myInput" />
    <button @click="logInput">Log</button>
  </div>
</template>

<style></style>
