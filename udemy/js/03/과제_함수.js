//Q1
function q1(a) {
  let result = ""; //전체 보여줄 빈 문자 변수
  let count = 1; //숫자 넣을 변수

  for (let i = 0; i < a.length; i++) {
    //변수 a의 모든 문자를 순회하기 위해 a.length가 필요함!
    if (a[i] === a[i + 1]) {
      count++;
    } else {
      //a와 a[i+1](앞에와 지금 문자)가 다르면
      //result(전체문자)에 (지금문자 + 지금문자 개수)를 추가,
      //count는 다음 글자를 위해 1로 초기화한다.
      result += a[i] + count;
      count = 1;
    }
  }
  return result;
}
const i = "aaabbbccc";
const i2 = "aabbaa";
const i3 = "abbbffd";
console.log(q1(i));
console.log(q1(i2));
console.log(q1(i3));

//Q2
//1.함수 선언식
function gugudan() {
  let result = "";
  for (let i = 1; i <= 9; i++) {
    result += `3 * ${i} = ${3 * i}\n`;
  }
  return result;
}
console.log(gugudan());

//2.함수 표현식
//2.1 익명함수
const gugudan4 = () => {
  let result = "";
  for (let i = 1; i <= 9; i++) {
    result += `4 * ${i} = ${4 * i}\n`;
  }
  return result;
};
console.log(gugudan4());

//2.2기명 함수
const gugudan5 = function ddd() {
  let result = "";
  for (let i = 1; i <= 9; i++) {
    result += `5 * ${i} = ${5 * i}\n`;
  }
  return result;
};
console.log(gugudan5());
