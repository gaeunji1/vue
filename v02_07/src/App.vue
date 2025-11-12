<script>
import { useTemplateRef } from 'vue';

export default {
  data() {
    return {
      site_name: 'Daum',
      url: 'https://daum.net',
      src:"https://i.namu.wiki/i/RYSIeYYRPme_mI-LyZi7UZvQy14vqz2Kbh6gWwwXUDWuwQ82R7vvwwkUlgVu6jZNB11wDTeOFOgAb0VRgEUTB3xXmji574VWPdOHiYGpQ3mc3fQgAgZYAnQrMcStZOjn_jjl5hjbNQLeDwDXjYUI1g.svg"
    };
  },
  methods:{
    clickAr : function(){
      this.site_name="Naver",
      this.url="https://naver.com"
    }
  }
};
</script>

<template>
  <a :href="url">{{ site_name }}</a>
  <img :src></img>
  <button @click="clickAr">버튼</button>
</template>

<style></style>
