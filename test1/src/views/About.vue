<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>컴포넌트 사용</p>
    <jiwon />
  </div>
</template>

<script>
import Vue from "vue";
import jiwon from "@/components/jiwon.vue";

export default Vue.extend({
  components: {
    jiwon,
  },
});
</script>
