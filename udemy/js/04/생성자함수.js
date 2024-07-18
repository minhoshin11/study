const student = {
  name: "su",
  age: 20,
  gender: "male",
  height: 185,
  introduce: function () {
    return `hello, my name is ${this.name} and I'm ${this.age} years old`;
  },
};
// console.log(student("name"));
// console.log(student("name"));
//피치 못할 사정 아니면 , 이렇게 "" 빼서 쓰는게 좋다.
//피치 못할 사정일 땐 student[] 이런식으로 쓰면 된다.

//생성자 함수 : 객체를 생성하고 초기화 하는데 사용되는 특수한 함수
//보통 new 키워드와 함께 사용 된다.
//함수 선언식으로 선언함.
//함수 식별자의 첫글자는 대문자임. (파스칼 케이스 사용함.)
//카멜케이스 (두번째단어부터 대문자 ex)userName :함수는 보통 이 방식으로 작성한다.
//스네이크케이스 user_name
//파스칼케이스 UserName 클래시 이름

function Student() {
  this.name = "su";
  this.age = 20;
  this.gender = "male";
  this.introduce = function () {
    return `hello, my name is ${this.name} and I'm ${this.age} years old`;
  };
}

const student1 = new Student();
console.log(student1);
//하나만 생성할 땐 생성자함수를 쓸 필요가 없고,
//여러개를 만들어야 하면 생성자함수를 사용해야 한다.
//클래스를 쓰면서 , 잘 안쓴다
//프로토타입을 이해하기 위해서 배우는 이유라고 한다.

//프로토타입 체인
//인스턴스 내부의 _proto_ 속성으로 자신을 생성한 생성자 함수의 프로토 타입 객체를 참조하는 현상
Student.prototype.introduces = function () {
  return `안녕 my name is ${this.name} and I'm ${this.age} years old`;
};

const student2 = new Student();
console.log(student2.introduces(), "인트로듀스");
