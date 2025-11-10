<script>
export default {
  data: function () {
    return {
      // channel: '왕초보 홈페이지 만들기',
      score: 60,
      subscribe: 2677,
    };
  },
};
</script>

<template>
  <!-- directive : <h1 v-pre>채널명 : {{ channel }}</h1>-->
  <!--
  <h1 v-if="score >= 90">평점 : A</h1>
  <h1 v-else-if="score >= 80">평점 : B</h1>
  <h1 v-else-if="score >= 70">평점 : C</h1>
  <h1 v-else>평점 : F</h1>
  <h3>구독자 수 : {{ subscribe }}</h3>
  <p>{{ `오늘의 행운 숫자 : ` + Math.ceil(Math.random() * 45) }}</p>
  <h1 v-html="channel"></h1>
  <h2 v-text="subscribe"></h2>-->
  <h1 v-if="score != 60">이 영역은 v-if에서 처리하고 있습니다</h1>
  <h1 v-show="score != 60">이 영역은 v-show에서 처리하고 있습니다</h1>
</template>

<style></style>
