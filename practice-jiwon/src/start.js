// 선언적 렌더링
var app = new Vue({
  el: "#app",
  data: {
    message: "안녕하세요 Vue!",
  },
});

// 엘리먼트 속성을 바인딩
var app2 = new Vue({
  el: "#app-2",
  data: {
    message: "이 페이지는 " + new Date() + " 에 로드 되었습니다",
  },
});

// 조건문과 반복문
// 엘리먼트가 표시되는지에 대한 여부를 제어
var app3 = new Vue({
  el: "#app-3",
  data: {
    seen: true,
  },
}); // 콘솔에 app3.seen = false 입력하면 사라짐

// v-for 디렉티브는 배열의 데이터를 바인딩하여
// Todo 목록을 표시하는데 사용가능
var app4 = new Vue({
  el: "#app-4",
  data: {
    todos: [
      { text: "JavaScript 배우기" },
      { text: "Vue 배우기" },
      { text: "무언가 멋진 것을 만들기" },
    ],
  },
});
// 콘솔에서, app4.todos.push({ text: 'New item' })을 입력
// Todo 목록에 새 항목이 동적으로 추가

// v-on 디렉티브 이벤트리스너
var app5 = new Vue({
  el: "#app-5",
  data: {
    message: "안녕하세요! Vue.js!",
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split("").reverse().join("");
    },
  },
});

// v-model 디렉티브
var app6 = new Vue({
  el: "#app-6",
  data: {
    message: "안녕하세요 Vue!",
  },
});

// 컴포넌트:
// Vue에서 컴포넌트는 미리 정의된 옵션을 가진 Vue 인스턴스
// todo-item 이름을 가진 컴포넌트를 정의합니다
Vue.component("todo-item", {
  template: "<li>할일 항목 하나입니다.</li>",
});
var appEx = new Vue({
  el: "#app-ex",
});
// 그러나 이것은 todo - item 컴포넌트를 사용할 때마다
// 똑같은 텍스트를 렌더링할뿐 무언가가 부족합니다.
// 부모 영역의 데이터를 자식 컴포넌트에 전달할 수 있어야 합니다.
// prop을 전달받을 수 있도록
// todo - item 컴포넌트의 정의를 수정해봅시다.
Vue.component("todo-item", {
  // 이제 todo-item 컴포넌트는 "prop" 이라고 하는
  // 사용자 정의 속성 같은 것을 입력받을 수 있습니다.
  // 이 prop은 todo라는 이름으로 정의했습니다.
  props: ["todo"],
  template: "<li>{{ todo.text }}</li>",
});
// 이제 v-bind를 사용하여
// 각각의 반복되는 todo - item 컴포넌트에 전달할 수 있습니다.

Vue.component("todo-item", {
  props: ["todo"],
  template: "<li>{{ todo.text }}</li>",
});

var app7 = new Vue({
  el: "#app-7",
  data: {
    groceryList: [
      { id: 0, text: "Vegetables" },
      { id: 1, text: "Cheese" },
      { id: 2, text: "Whatever else humans are supposed to eat" },
    ],
  },
});
