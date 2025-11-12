<template>
  <div>
    <p>Full Name : {{ fullName }}</p>
    <input v-model="fullName" placeholder="Enter full name" />

    firstName:{{ firstName }}<br>
    lastName:{{ lastName }}
  </br>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe',
    };
  },
  computed: {
    fullname: {
      get() {
        return this.firstName + ' ' + this.lastName;
      },
      set(newValue) {
        const name = newValue.split(' ');
        this.firstName = name[0];
        this.lastName = names[names.length - 1];
      },
    },
  },
};
</script>

<style></style>
