// while 문 실습

// 1부터 100까지의 정수 중에서
// 짝수들의 합과 홀수들의 합을 따로 구분하여 계산한다.
// 그리고 그 결과값을 출력하는 프로그램을 구현한다.
// 단, 반복문은 while문을 사용할 수 있도록 하며
// 조건 구문은 if조건문을 사용하여 작성할 수 있도록 한다.

// 실행 예)
// 1부터 100까지의 정수 중
// 짝수의 합 : 2520
// 홀수의 합 : 2500

let n = 1; // 1 부터 100까지 1씩 증가할 변수
let evenSum = 0; // 짝수들의 누적합을 담아낼 변수
let oddSum = 0; // 홀수들의 누적합을 담아낼 변수

while (n <= 100) {
  if (n % 2 === 0) {
    evenSum += n;
  } else {
    oddSum += n;
  }
  n++;
}

console.log("짝수의 합 : ", evenSum);
console.log("홀수의 합 : ", oddSum);
