<script>
export default {
  data: function () {
    return {
      channel: '왕초보 홈페이지 만들기',
      subscribe: 2677,
    };
  },
};
</script>

<template>
  <h1>채널명 : {{ channel }}</h1>
  <h3>구독자 수 : {{ subscribe }}</h3>
  <p>{{ `오늘의 행운 숫자 : ` + Math.ceil(Math.random() * 45) }}</p>
</template>

<style></style>
