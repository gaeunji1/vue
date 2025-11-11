<script>
export default {
  data() {
    return {
      x: 0,
      y: 0,
      msg: '',
    };
  },
  methods: {
    mousePos(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
    mouseClick(e) {
      this.msg += this.x + ',' + this.y + '\n';
    },
  },
};
</script>

<template>
  <div>
    <div id="display" v-on:mousemove="mousePos" v-on:click.right.prevent="mouseClick">
      x: {{ x }}<br />
      y: {{ y }}
    </div>
    <textarea>{{ msg }}</textarea>
  </div>
</template>

<style>
#display {
  width: 200px;
  height: 200px;
  background-color: goldenrod;
}
textarea {
  height: 500px;
}
</style>
