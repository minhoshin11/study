// 조건문은 기준이 무조건 참거짓이다.
const isLoggedIn = true;
function loginCheck() {
  if (isLoggedIn) {
    return "로그인 되었음";
  } else {
    return "로그인 실패!";
  }
}
console.log(loginCheck(isLoggedIn));

const score = 60;
if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else {
  ("재수강 하십쇼");
}

if (isLoggedIn) massage = "로그인 되었습니다.";
else message = "로그인 필요합니다.";
//if안에 한줄이면, 중괄호 생략 가능하다.

const area = "경기도";
let baesongbi = 0;

switch (area) {
  case "서울":
    baesongbi = 3000;
    break;
  case "인천":
    baesongbi = 4000;
    break;
  case "어딘가":
    baesongbi = 5000;
    break;
  default:
    baesongbi: 10000;
    break;
}

//다 3000원일 때 케이스는
switch (area) {
  case "서울":
  case "인천":
  case "남양주":
    baesongbi = 3000;
    break;
  case "경기도":
    baesongbi = 3500;
    break;
  default:
    baesongbi = 10000;
    break;
}

//윗값을 모두 만족하지 않을 땐 default값이 쓰는 것이다.
function ifFunction() {
  if (area === "서울") baesongbi = 3000;
  else if (area === "경기도") {
    return (baesongbi = 5000);
  } else if (area === "인천") {
    return (baesongbi = 4000);
  } else {
    return (baesongbi = 10000);
  }
}
console.log(ifFunction());

function testScore() {
  score = 59;
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}
console.log(testScore());
