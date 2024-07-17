//Q1(1부터 9까지 출력하기)
for (let i = 1; i < 10; i++) {
  console.log(i);
}

//Q2(음수 걸러내기)
function q2() {
  let sum = 0;
  const numArr = [10, -10, 20, -30, 40];
  for (let value of numArr) {
    if (value > 0) {
      sum += value;
    }
  }
  return sum;
}
console.log(q2());
//배열엔 length(배열의 길이 체크)
//배열에 length를 쓰면 그 안에 요소가 몇개인구나를 알 수 있다.

//Q3(홀짝 구분하기)
function q3() {
  const result = [];
  for (let i = 0; i < 16; i++) {
    result.push(i % 2 === 0 ? i + " 짝수" : i + " 홀수");
  }
  return result;
}
console.log(q3());

//Q4(암스트롱 수 구하기)
//이건.,.. 도저히 모르겠습니다...
//암스트롱 수) 153 = 1+ 125 + 27
//세 자리의 정수 중에서 각 자리의 수를 세 제곱한 수의 합과 자신이 같은 수

//456
//일의 자리 : 456 % 10 = 6
//십의 자리 : (456-6)/10
//백의 자리 : 456-6-(5*10) = 400/100 = 4;

function q4() {
  for (let i = 100; i <= 999; i++) {
    const num1 = i % 10; // 일의 자리
    const num2 = ((i - num1) / 10) % 10; //십의 자리
    const num3 = (i - num1 - num2 * 10) / 100; // 백의 자리
    if (i === num1 ** 3 + num2 ** 3 + num3 ** 3) console.log(i);
    // console.log(num3, num2, num1);
  }
}
q4();

//거듭제곱 연산자는 **
// 2 ** 3 = 8
// 3 ** 2 = 9
// 5 ** 3 = 125
//반복문 안에 반복문 => 다중 반복문
