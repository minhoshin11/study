const x = 10;
const y = 20;
const sum = x + y;
console.log("연습문제1", sum);
// 재할당할 가능성이 없기 때문에 const로 하는 게 좋음.

let name = "Alice";
name = "Bob";
console.log("연습문제2", name);

const PI = 3.14;
console.log("연습문제3", PI);

let a = 5;
let b = 10;
const tmp = a;
a = b;
b = tmp;
// let은 변수를 새로 선언하는 것이다. 이미 선언된 변수에,새로운 값을 할당할 때는 변수이름만으로 값을 할당하는게 좋음

console.log("연습문제4 a값", a);
console.log("연습문제4 b값", tmp);
