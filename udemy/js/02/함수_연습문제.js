//Q1
const addFunc = (...args) => {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
};
console.log(addFunc(10, 20, 30));

//Q2
//사칙연산을 수행하는 로직을 담은 함수를 구현
//구현방법 자율
function calculate(a, b, operator) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "%":
      return a % b;
    case "/":
      return a / b;
  }
}
console.log(calculate(10, 20, "-"));

//Q3
const isEven = (a) => {
  return a % 2 === 0 ? true : false;
};
console.log(isEven(7));

//Q4
const factorial = (n) => {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result = result * i;
  }
  return result;
};
console.log(factorial(5), "5번 문제");
//팩토리얼 두번째 방법
const factorial2 = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};
// 함수안에서 자기 자신을 호출 하는 것
//재귀함수를 멈추는 방법은 지금처럼 예외처리를 하면 된다.
console.log(factorial2(5), "팩토리얼2");

//Q5 삼각형의 넓이 계산하기
//매개변수 : "삼각형의 밑변과 높이"
//밑변 a, 높이 b
const triangleArea = (a, b) => {
  return (a * b) / 2;
};

console.log(triangleArea(10, 5));
