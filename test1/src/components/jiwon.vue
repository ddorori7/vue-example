<template>
  <div>
    <p>header</p>
    <!-- <h1>{{ title }}</h1> -->
    <slot name="header" :kossie="kossie"></slot>

    <p>body</p>
    <!-- <p>{{ name }}</p> -->
    <!-- <br /> -->
    <slot></slot>
    <!-- <button @click="updateName">업데이트</button> -->

    <p>footer</p>
    <slot name="footer" :kossie="kossie"></slot>
  </div>
</template>

<script>
export default {
  // 화면마다 다른 값을 주기위해 props로 title을 보내줄 때 사용
  // props: ["title"], -> 대부분은 이렇게 안주고 아래와 같이 사용!
  props: {
    title: {
      type: String,
      /* required: true, // -> jiwon.vue 컴포넌트를 사용할때  title 속성 값을 주지 않으면 콘솔로그에 에러뜸!
      // false 이면 속성값을 안줘도 에러 안뜸! */
      default: "default title",
    },
    name: {
      type: String,
      default: "default name",
    },
  },
  data() {
    return {
      kossie: "coder",
      // name: "ddorori7",
      // props에서 사용한 것은 data()에서 사용 x
    };
  },
  methods: {
    updateName() {
      // props에서 사용한 것은 직접적으로 바꾸면 안됌!
      // 자식에서는 바꾸지 않고 부모에서 바꿔주기!
      // this.name = "ddorori7 updated!"; ->  놉!
    },
  },
};
</script>
<style scoped></style>
