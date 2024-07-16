// 기본 자료형
// 문자열(String), 숫자(Number), 불린(Boolean), 배열(Array), 객체(Object),
// 함수(Function), 널(Null), 미정의(Undefined)

// 참조 자료형 (객체,함수,배열)
//변수에 지수표기법으로 할당하더라도 , 지수를 10진수를 변환한 10진수의 값으로 본다.
num = 10e12;
console.log(num);
//결과값 : 10000000000000

const tvChannel = undefined;

const movieChannel = null;

const num1 = 10;
const num2 = 10;
console.log(num1 === num2);

const arr1 = [10, 20];
const arr2 = [10, 20];
console.log(arr1 === arr2);
//이건 배열의 메모리 주소가 달라서 그럼.
