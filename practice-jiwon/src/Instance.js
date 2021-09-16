// vue 인스턴스

// 모든 Vue 앱은 Vue 함수로 인스턴스를 만드는 것부터 시작
/*
var vm = new Veu({
  // 옵션
});
*/
// MVVM 패턴과 관련이 없지만 Vue의 디자인은 부분적으로 그것에 영감을 받았습니다. 관례적으로, Vue 인스턴스를 참조하기 위해 종종 변수 vm(ViewModel의 약자)을 사용합니다.

// 데이터 객체
var data = { a: 1 };

// Vue인스턴스에 데이터 객체를 추가합니다.
var vm = new Vue({
  data: data,
});

// 인스턴스에 있는 속성은
// 원본 데이터에 있는 값을 반환합니다.
vm.a === data.a; // => true

// 인스턴스에 있는 속성값을 변경하면
// 원본 데이터에도 영향을 미칩니다.
vm.a = 2;
data.a; // => 2

// ... 반대로 마찬가지입니다.
data.a = 3;
vm.a; // => 3

// 데이터가 변경되면 화면은 다시 렌더링됩니다.
// 유념할 점은, data에 있는 속성들은
// 인스턴스가 생성될 때 존재한 것들만 반응형
// 즉, 다음과 같이 새 속성을 추가하면:

vm.b = "hi";

// b가 변경되어도 화면이 갱신되지 않습니다.

// 어떤 속성이 나중에 필요하다는 것을 알고 있으며,
// 빈 값이거나 존재하지 않은 상태로 시작한다면
// 아래와 같이 초기값을 지정할 필요가 있습니다.

var vm = new Vue({
  // 옵션
  data: {
    newTodoText: "",
    visitCount: 0,
    hideCompletedTodos: false,
    todos: [],
    error: null,
  },
});

// 여기에서 유일한 예외는
// Object.freeze()를 사용하는 경우입니다.
// 이는 기존 속성이 변경되는 것을 막아
// 반응성 시스템이 추적할 수 없다는 것을 의미
var obj = {
  foo: "bar",
};

Object.freeze(obj);

new Vue({
  el: "#app",
  data: obj,
});

// Vue 인스턴스는 데이터 속성 이외에도 유용한 인스턴스 속성 및 메소드를 제공합니다. 다른 사용자 정의 속성과 구분하기 위해 $ 접두어를 붙였습니다.
var data = { a: 1 };
var vm = new Vue({
  el: "#example",
  data: data,
});

vm.$data === data; // => true
vm.$el === document.getElementById("example"); // => true

// $watch 는 인스턴스 메소드 입니다.
vm.$watch("a", function (newVal, oldVal) {
  // `vm.a`가 변경되면 호출 됩니다.
});
