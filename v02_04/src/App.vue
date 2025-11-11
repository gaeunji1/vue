<script>
export default {
  // methods: {
  //   createAlert() {
  //     alert('경고창이 떴습니다.');
  //   },
  // },
  data() {
    return { kValue: '' };
  },
  methods: {
    getKey(e) {
      this.kValue = e.key;
      alert('alt + s 를 누르셨습니다.');
    },
  },
};
</script>

<template>
  <!--<button v-on:click.once="createAlert">클릭해보세요</button>-->
  <input type="text" v-on:keydown.alt.s="getKey" /><br />
  <span>{{ kValue }}</span>
</template>

<style></style>
