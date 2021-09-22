<template>
  <div>
    <p>{{ name }}</p>
    <br />
    <button @click="updateName">업데이트</button>
  </div></template
>
<script>
export default {
  data() {
    return {
      name: "ddorori7",
    };
  },
  methods: {
    updateName() {
      this.name = "ddorori7 updated!";
    },
  },
};
</script>
<style scoped></style>
