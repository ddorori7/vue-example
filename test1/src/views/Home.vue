<template>
  <div>
    <h1>This is Home page</h1>
    <p>{{ name }}</p>
    <p>views 폴더는 페이지 컴포넌트</p>
    <p>더 만들고 싶으면 더 쪼개서 components폴더에!</p>
    <p>컴포넌트 불러와서 사용</p>
    <!-- jiwon.vue에서 props로 보낸 타이틀을 속성으로 사용! -->
    <jiwon name="ddorori7" />

    <h2>부모 컴포넌트로 데이터 보내기</h2>
    <form action="">
      <!-- <InputField :name="name" @update-name="updateName" /> -->
      <!-- <InputField :name="name" @update-name="name = $event.target.value" /> -->
      <InputField v-model="name" />
      <!-- 컴포넌트에 v-model="name"을 넣어주면 자동으로 value 값을 보내줌(InputField로) -->
      <br />
      <button @click="updateName">submit</button>
    </form>
    {{ name }}
  </div>
</template>

<script>
// 컴포넌트 불러와서 사용!
// @는 src 소스를 가리킴
import jiwon from "@/components/jiwon.vue";
import InputField from "@/components/InputField.vue";

export default {
  components: {
    jiwon,
    InputField,
  },
  data() {
    return {
      name: "kossie coder",
    };
  },
  beforeCreate() {
    console.log("beforeCreate", this.name);
    // beforeCreate undefined
  },
  created() {
    console.log("created", this.name);
    // created kossie coder
  },
  beforeMount() {
    alert("beforeMount");
  },
  mounted() {
    alert("mounted");
    // 여기서부터 화면에 접근 가능(DOM이 mounted되면서)
  },
  beforeUpdate() {
    alert("beforeUpdate");
  },
  updated() {
    alert("updated");
  },
  beforeDestroy() {
    alert("beforeDestroy");
  },
  destroyed() {
    alert("destroyed");
  },

  methods: {
    // updateName(name) {
    //   this.name = name;
    // },
    updateName() {
      this.name = "hello";
    },
  },
};
</script>

<style scoped>
h1 {
  color: red;
}
</style>
