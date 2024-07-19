const students = [
  { name: "Alice", age: 21, gender: "male", height: 170 },
  { name: "Bob", age: 19, gender: "male", height: 165 },
  { name: "Charlie", age: 20, gender: "male", height: 175 },
  { name: "David", age: 22, gender: "male", height: 180 },
  { name: "Eve", age: 17, gender: "female", height: 160 },
  { name: "Frank", age: 18, gender: "male", height: 175 },
  { name: "Grace", age: 21, gender: "female", height: 165 },
  { name: "Henry", age: 19, gender: "male", height: 170 },
  { name: "Ivy", age: 20, gender: "female", height: 155 },
  { name: "Jack", age: 22, gender: "male", height: 185 },
];

// 1. 키가 185인 학생 찾기
const height185 = students.find((student) => student.height === 185);
console.log("1번 키 185인 학생:", height185);

//2. 나이가 20살 이상인 학생들 찾기
const age20 = students.filter((student) => student.age >= 20);
console.log("2번 나이 20살 이상인 학생들:", age20);

//3. 키가 165 이하인 학생들이 있는지 찾아서 true, false로 반환하기
const height165 = students.map((student) => {
  return student.height <= 165
    ? true + ` ${student.name}`
    : false + ` ${student.name}`;
});

//4. 학생들이 모두 10살 이상인지 확인해서 true, false 반환하기
const age10 = students.every((student) => student.age >= 10);
console.log("4번 10살이상 체크:", age10);

//5. 학생들의 평균 연령 구하기
//필요변수 : 전체나이 , 멤버 숫자
//for문으로 i는 array길이(총 인원)만큼이어야 함.
//전체는 arr[i]나이를 더하면서 for문이 끝나게 하고
//마지막에 전체나이 / member수
const averageAge = (arr) => {
  let result = 0;
  let members = arr.length;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i].age;
  }
  return result / members;
};
console.log("5번", averageAge(students));
// const answerAge = students.reduce((acc, student) => acc + student.age, 0);
// console.log(answerAge, "5번 reduce");

//6. 남학생들의 평균 연령 구하기
const maleAge = students.filter((student) => student.gender === "male");
console.log("6번 남학생들 평균 연령 구하기", averageAge(maleAge));

//7. 야학생들만 따로 추출해서 새로운 배열 만들기
const femaleArray = students.filter((student) => student.gender === "female");
console.log("7번 여학생들 추출", femaleArray);

//8. 여학생들 중 나이가 가장 어린 학생 찾기
const youngFemale = femaleArray.sort((a, b) => a - b)[0];
console.log("8번 가장 어린 여학생 찾기", youngFemale);

// 연습문제!
//Q1
let a = "32125";
let reversed = a.split("").reverse().join("");
console.log("Q1 숫자 거꾸로 만들기", reversed);

//Q2
//일단 공백을 기준으로 먼저 나눈다.
//배열에 담는다.
//글자수 length로 파악한다.
//파악한 글자 중 젤 큰놈을 앞으로 정렬한다.
//0번을 뽑는다.

function findLongStr(str) {
  const wordArray = str.split(" ");
  const longWord = wordArray.sort((a, b) => b.length - a.length)[0];
  console.log("Q2 ", longWord);
}

findLongStr("we are the champion");
findLongStr("i`m fine thank you, and you?");
