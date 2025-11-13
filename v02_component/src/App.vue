<script>
import LocalComponent from "@/components/localChild.vue";
export default {
  components: {
    LocalComponent,
  },
};
</script>

<template>
  <h1>App.vue</h1>
  <LocalComponent />
  <GlobalChild />
</template>
