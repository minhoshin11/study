//연산자와 피연산자
//연산자에 의해서 계산의 대상이 되는 놈이다.
const num1 = 10;
const num2 = 10;
const result = num1 + num2;
//여기선 등호가 연산자니까 num1~~~ 이것들은 피연산자다.
//num1 + num2로 보면 , num들이 피연산자임.

const a = 10;
const b = 5;
const result1 = a + b; //더하기
const result2 = a - b; //빼기
const result3 = a / b; //나누기
const result4 = a % b; //나머지
const result5 = a * b; //곱셈
// console.log(result, result1, result2, result3, result4, result5);

//증강연산자(증가연산자++, 감소연산자--)
let num = 10;
num--;
num--;
num--;
// console.log("감소연산자", num);

//전치연산 후치연산
let y = 7;
// console.log(++y);
// console.log(y++);

//아무것도 드래그 안하고 코드러너 돌리면 오류가 날 수도 있다.

//복합 대입 연산자
let num6 = 10;
num6 += 10; //num = num + 10
// console.log(num6);

// let x = 20;
// x += 10;
// console.log(x, "+10 x값");
// x -= 5;
// console.log(x, "-5 x값");
// x /= 2;
// console.log(x, "나누기 2");
// x *= 3;
// console.log(x, "곱하기 3");

// const num9 = "10";
// console.log(num9 == 10);
// console.log(num9 === 10);

// const age1 = 25;
// const age2 = 30;
// console.log(age1 > age2);
// console.log(age1 === age2);
// const testAge = age1 >= age2 ? "Older" : "Younger or Same";
// console.log(testAge);

// const myMoney = 3000;

// const moneyResult = myMoney ? "돈이 부족합니다." : "물건을 구매하시겠습니까?";
// console.log(moneyResult);
//이게 참이 뜨는 이유는 myMoney가 0,undefined,null이 아니면 참으로 띄우겠다는 자바스크립트의 약속이다.

//여기서부터 과제임

//숫자비교
const num11 = 30;
const number = num11 > 0 ? "Positive" : num === 0 ? "Zero" : "Negative";
console.log("0,음수,양수:", number);

//최댓값 찾기
const one = 10;
const two = 48;
const three = 37;

const oneTwo = one > two ? one : two;
const threeNum = oneTwo < three ? three : oneTwo;
// const max = one > two ? (a > c ? a : c) : (b > c ? b : c)
console.log("가장 큰 수 찾기:", three);

//짝수 홀수 확인
const number2 = 119;
const checkEven = number2 % 2 === 0 ? "Even" : "Odd";
const checkEvenValue = number2 % 2;
console.log("짝수홀수 비교:", checkEven);

//로그인 확인
// const isLoggedIn = true;
// const checkLogin = isLoggedIn ? "welcome" : "please log in";
// console.log("로그인 확인:", checkLogin);

//성인 확인
const age = 6;
const checkAge = age >= 18 ? "Adult" : "Minor";
console.log("나이체크:", checkAge);

//논리 연산자

//논리 연산자 기본
const a1 = true;
const b1 = false;
console.log("and 연산자", a1 && b1);
console.log("or 연산자 ", a1 || b1);
console.log("not 연산자", !(a1 && b1));

//여러조건 결합
const x1 = 30;
const y1 = 0;
const z1 = 40;

const checkXY = x1 > 10 && y1 > 5;
console.log("xy결과", checkXY);
const checkXZ = x1 > 10 || z1 > 3;
console.log("xz결과", checkXZ);

const checkY = y1 === 0;
console.log("Y가 0인지 체크", checkY);

// 3.사용자 로그인 및 권한 확인
const isLoggedIn = true;
const isAdmin = false;

const checkLogin = isLoggedIn ? "welcome" : "please log in";
const checkAdmin = isAdmin ? "Admin access granted" : "Admin access denied";
const checkBoth =
  isLoggedIn && isAdmin ? "Full access granted" : "Restricted access";

console.log("로그인 첵", checkLogin);
console.log("어드민 책", checkAdmin);
console.log("둘다 첵", checkBoth);

// 4.값의 존재 확인
const value = "문자열스";
const value2 = null;
//value가 undefined면 null이 나온다.
//삼항연산자면 false를 뱉었겠지만, JS엔진은 false따위 쓰려는 노력을 안한다.
//근데, not 연산자를 쓰면 , true,false로 뱉으려는 노력을 한다.
const checkValue = value || value2;
const checkValueBoth = checkValue === checkValue || checkValue === null;
console.log("null을 뱉어서 부정을 두번했다.", !!checkValue);
console.log("둘다 값이 있나 확인", checkValueBoth);

// 5.범위 확인
const num111 = 79;
const numRound =
  num111 >= 0 ? (num111 <= 100 ? num111 : "100보다 큼") : "0 이하임";
console.log(numRound);

const numRound2 =
  num111 >= 100 ? (num1 === 100 ? "100임" : "100보다 큼") : "100보다 작음";
console.log(numRound2);

let obj = {
  name: "철수",
  age: 20,
  gender: "male",
};

console.log("오브젝", obj);

console.log(10 == "10"); // true
console.log(10 === "10"); // false
console.log(10 * "20"); // 200 곱셉은 자동으로 형변환은 해버린다.
console.log(10 * 20); // 200
