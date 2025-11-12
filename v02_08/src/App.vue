<script>
import { useTemplateRef } from 'vue';

export default {
  data() {
    return {
      bgClass: 'bg',
      erClass: 'text-danger',
      isActive: false,
    };
  },
};
</script>

<template>
  <div class="border" :class="[isActive ? bgClass : '', erClass]">Warning</div>
</template>

<style>
.border {
  border: 2px solid red;
}
.bg {
  background-color: gray;
}
.text-danger {
  color: red;
}
</style>
