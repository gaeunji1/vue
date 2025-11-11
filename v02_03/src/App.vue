<script>
// export default {
//   data: function () {
//     return {
//       userName: '왕초보',
//     };
//   },
//   methods: {
//     greeting(userName) {
//       return 'Hi, there ' + userName;
//     },
//   },
// };

export default {
  data() {
    return {
      num: 0,
    };
  },
  methods: {
    increment() {
      this.num++;
    },
    decrement() {
      this.num--;
    },
  },
};
</script>

<template>
  <!--<h1>{{ greeting('TOM') }}</h1>-->
  <p>{{ num }}</p>
  <button v-on:click="increment">Increase number</button>
  <button v-on:click="decrement">Decrease number</button>
</template>

<style></style>
