<template>
  <div>
    <label for="">Name</label>
    <!-- <input
      type="text"
      :value="name"
      style="padding: 30px; border: 2px solid
    red;"
      @input="updateName"
    /> -->
    <!-- <input
      type="text"
      :value="name"
      style="padding: 30px; border: 2px solid
    red;"
      @input="$emit('update-name', $event)"
    /> -->
    <input
      type="text"
      :value="value"
      style="padding: 30px; border: 2px solid
    red;"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
  // methods: {
  //  updateName(e) {
  //    console.log(e.target.value);
  //    // 부모 컴포넌트로 보내는 방법
  //    //   this.$emit("원하는 이벤트 이름", 보내려는 값);
  //    this.$emit("update-name", e.target.value);
  // },
  //  },
};
</script>

<style></style>
