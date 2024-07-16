//Q1(1부터 9까지 출력하기)
for (let i = 0; i < 10; i++) {
  console.log(i);
}

//Q2(음수 걸러내기)
function q2() {
  const numArr = [10, -10, 20, -30, 40];
  const positive = numArr.filter((num) => num > 0);
  return positive;
}
console.log(q2());

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
