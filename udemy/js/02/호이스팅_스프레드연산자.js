//변수 선언을 변수 범위  맨 위로 끌고 오는 현상

//호이스팅 : var 이름

var 이름 = "이름이다";
//이거 두개를 분리해서 var 이름만 맨 위로 올림

var 나이 = 20,
  이름 = "ㅁ",
  성별;
//변수를 이런식으로  여러개 만들 수도 있다.

//전역변수 : 모든 곳에서 쓸 수 있는 변수
//변수를 가장 바깥쪽에 넣으면 그게 전역변수임

let array = ["hello", "world"];

console.log(array);
console.log(...array);

let array2 = ["안녕", "친구들아"];

let array3 = [...array, ...array2];
console.log(array3);

//깊은 복사 얕은 복사
let a = [1, 2, 3];
//이렇게 변수를 냅다 갖다놔버리면 값을 공유함. (얕은 복사)
let b = a;
let c = [...a];
//이렇게 스프레드 연산자로 배열을 없앴다가 다시 놓아주면,
//메모리주소가 새로 할당되어서 깊은 복사가 완료가 됨.
a[3] = 4;
console.log(a);
console.log(b);
console.log(c);
//이게 깊은 복사 쓸 때 유용함.
// result
// a: [1,2,3,4]
// b: [1,2,3,4]
// c: [1,2,3]

//reference data type (Array,Object)
//이에 관련된 내용은 여기에 나옴.

function 더하기(a, b, c) {
  console.log(a + b + c);
}
더하기(1, 2, 3);

//apply , call
let person = {
  인사: function () {
    console.log(this.name + "안녕");
  },
};

let person2 = {
  name: "손흥민 ",
};

person.인사.apply(person2);
//이렇게 하면 "손흥민 안녕"이 출력이 된다.
//apply는 이런 것이지.
//적용한다. 어떤 걸?
//본인보다 위인 놈 => 매개변수.

person.인사.call(person2);
