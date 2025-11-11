<script>
export default {
  data() {
    return {
      sports: ['BaseBall', 'Football', 'Volleyball', 'Tennis'],
    };
  },
};
</script>

<template>
  <ul>
    <li v-for="(sport, index) in sports">{{ index + 1 }} {{ sport }}</li>
  </ul>
</template>

<style></style>
