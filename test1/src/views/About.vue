<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>컴포넌트 사용</p>
    <!-- jiwon.vue에서 props로 보낸 타이틀을 속성으로 사용! -->
    <!-- :title="title" -> 속성값에 숫자 데이터 값을 바인딩하면 타입이 달라서 콘솔에 에러
    <jiwon :title="title" /> -->
    <jiwon title="about title" />
  </div>
</template>

<script>
import Vue from "vue";
import jiwon from "@/components/jiwon.vue";

export default Vue.extend({
  components: {
    jiwon,
  },
  data() {
    return {
      title: 5,
    };
  },
});
</script>
