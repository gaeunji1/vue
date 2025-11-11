<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
};
</script>

<template>
  <p>{{ 'count : ' + count }}</p>
  <button v-on:click="count++">숫자 증가</button>
  <button v-on:click="count--">숫자 감소</button>
  <button v-on:mouseover="count = 0">0으로 초기화</button>
</template>

<style></style>
