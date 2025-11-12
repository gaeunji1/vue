<script>
export default {
  data() {
    return {
      myWidth: 10,
    };
  },
  methods: {
    incWidth: function () {
      this.myWidth += 10;
    },
    initWidth: function () {
      this.myWidth = 10;
    },
  },
};
</script>

<template>
  <div
    class="demo"
    @mouseover="initWidth"
    :style="{
      width: myWidth + 'px',
    }"
  ></div>
  <button v-on:click="incWidth">버튼을 클릭해보시오</button>
</template>

<style>
.demo {
  width: 100px;
  height: 100px;
  background-color: blueviolet;
}
</style>
