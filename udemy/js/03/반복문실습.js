//실행될 코드가 앞에 , 조건은 뒤에. => false 일 때도 주어진 코드가 최소 한번은 실행된다.

//for(초기문; 조건문; 증감문){반복되는 코드}
for (let i = 0; i < 3; i++) {
  console.log("for문", i);
}

//while(조건문){코드,증감문}
//주어진 조건을 만족하는 동안 코드를 반복

let i = 0;
while (i < 5) {
  console.log("while", i);
  i++;
}

//do..while
//do{코드,증감문}while(조건)

let i2 = 0;
do {
  console.log("do while", i2);
  i2++;
} while (i2 < 5);

//for in
//객체 순환(객체의 속성을 반복한다.)
//for(객체 안에 배열을 반환받을 변수 선언){코드}
//for(let 변수 in 객체){코드 (콘솔로그(변수))}
let object = {
  a: 1,
  b: 2,
  c: 3,
};
for (let propertyKey in object) {
  console.log(propertyKey + "프로퍼티 키 for in");
}
//문법에 for , "in"이 들어가서 for in이네
for (let property in object) {
  console.log(
    "key는" + property + "이고 value는" + object[property] + "입니다."
  );
}

//for of
//배열 순환
let array = [1, 2, 3];
for (let result of array) {
  console.log(result, "for of");
}
