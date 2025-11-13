<script>
import LocalComponent from "@/components/localChild.vue";
import GlobalChild from "./components/globalChild.vue";
export default {
  data() {
    return {
      cnt: 1,
    };
  },
  beforeCreate() {
    console.log("before create");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("before mount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("before update");
  },
  updated() {
    console.log("updated");
  },
  deforeUnmount() {
    console.log("beforeUnmount");
  },
  unmounted() {
    console.log("unmounted");
  },
  methods: {
    counter() {
      this.cnt++;
    },
    discounter() {
      this.cnt--;
    },
  },
};
</script>

<template>
  <h1>App.vue</h1>
  <h1>Count: {{ cnt }}</h1>
  <GlobalChild v-if="cnt == 2" />
  <button @click="counter">Count +1</button>
  <button @click="discounter">Count -1</button>
</template>
