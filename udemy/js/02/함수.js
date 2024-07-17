//함수
//함수 선언식
// function add() {}

//함수 표현식 (함수를 변수에 담는 것)
// 기명함수 : const add = function add(){}
//실무에선 이렇게 익명함수로 많이 쓴다.
// const add = function () {};
//호출방법 add()

//화살표 함수 -> 함수를 정의하는 방법
//()=>{}
//이처럼 소괄호 => 중괄호 이놈이 화살표함수인 것이다.
// const add = () => {};

//매개변수(parameter) (함수 파라미터 구멍에 들어가는 놈.)

// function printTxt(msg) {
//   console.log(msg, name);
// }
//하나만 받아서 쓰던지 , 아니면 매개변수를 아예 아무것도 안받아도 자바스크립트는 에러라고 보지 않는다.

//매개변수에서 기본값을 지정해줄 수 있다. (ES6에서 추가 된 기능)
// function add1(a, b, c = 0) {
//   console.log(a + b + c);
// }

//매개변수를 가변으로 받는 방법
//...은 나머지 연산자임.
//...을 사용하면 매개변수를 2개 넣든, 3개넣든 "배열형태"로 들어가게 된다.
function addss(...args) {
  console.log(args);
  let sum = 0;
  for (let i = 0; let < a.length; i++) {
    sum += a[i];
  }
}
function argsFunc(a, b, ...args) {
  console.log(a, b, args);
}
argsFunc(10, 20, 30, 40);

function addFunc(a, b) {
  const sum = a + b;
  return sum;
}
console.log(addFunc(2, 4));

// const membershipCard = () => {
//   return {
//     name: "야호야호",
//     grade: "basic",
//   };
// };
const membershipCard = () => ({ name: "야호야호", grade: "basic" });

console.log(membershipCard());

// const add = (a, b) => {
//   return a + b;
// };
// const add = (a, b) => a + b;
