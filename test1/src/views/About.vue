<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>컴포넌트 사용</p>
    <!-- jiwon.vue에서 props로 보낸 타이틀을 속성으로 사용! -->
    <!-- :title="title" -> 속성값에 숫자 데이터 값을 바인딩하면 타입이 달라서 콘솔에 에러
    <jiwon :title="title" /> -->
    <!-- <jiwon title="about title" /> -->
    <jiwon>
      <!-- <slot></slot>:
       뷰 컴포넌트를 그냥 안닫고  <jiwon></jiwon> 사이에 코드를 적으면 <slot></slot>을 넣은곳에 나온다. -->
      <!-- <h1>hello</h1>
        <p>hi</p>
      </div>
      <div>adsfasdf</div> -->

      <!-- slot 여러개 쓰기 -->
      <template v-slot:header="{ kossie }">
        <p>
          header11 <br />
          코지값! {{ kossie }}
        </p>
      </template>
      <template v-slot:default>
        slot에 name안줬을때! hello-default
      </template>
      <template #footer="props">
        코지값! {{ props.kossie }} <br />
        v-slot:name 을 #name으로 줄여서 쓸 수 있다!
      </template>
    </jiwon>
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
