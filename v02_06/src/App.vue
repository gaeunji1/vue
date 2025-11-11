<script>
import { useTemplateRef } from 'vue';

export default {
  data() {
    return {
      // inputName: '홍길동222222',
      // agree: false,
      itemName: null,
      itemCnt: 1,
      sList: [{ name: '감귤', cnt: 2 }],
    };
  },
  methods: {
    addItem() {
      let item = {
        name: this.itemName,
        cnt: this.itemCnt,
      };
      this.sList.push(item);
      this.itemName = null;
      this.itemCnt = 1;
    },
  },
};
</script>

<template>
  <!--<input type="text" v-model="inputName" />
  <p>{{ inputName }}</p>

  <p>이 약관에 동의하십니까?</p>
  <input type="checkbox" v-model="agree" /><br />
  {{ agree }}
  <button v-show="agree">가입하기</button>-->
  <form v-on:submit.prevent="addItem">
    <p>품목 : <input type="text" required v-model="itemName" /></p>
    <p>
      수량 :<select v-model="itemCnt">
        <option value="1">1개</option>
        <option value="2">2개</option>
        <option value="3">3개</option>
        <option value="4">4개</option>
        <option value="5">5개</option>
        <option value="6">6개</option>
      </select>
    </p>
    <button type="submit">상품추가</button>
    <p>{{ itemName }} ({{ itemCnt }} 개)</p>
  </form>
  <p>구입할 품목:</p>
  <ul>
    <li v-for="item in sList">{{ item.name }} ({{ item.cnt }} 개)</li>
  </ul>
</template>

<style></style>
