//객체
//동적으로 속성을 추가 할 수 있다.
//동적으로 속성을 제거 할 수 있다.

const obj = { a: 1, b: 2, c: 3 };
obj.color = "yellow";

// delete 오브젝트이름.키 이름 이거 삭제 메소드임.
delete obj.color;
// console.log(obj.color);

//객체 속성을 순회할 수 있다.
for (let key in obj) {
  console.log(obj[key]);
}

//이걸 매개변수로 넘겨서 유용하게 쓸 수 있다.
function User(name, age, gender) {
  //this = {}
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.introduce =
    "이름 : " + this.name + ", 나이:" + this.age + ", 성별 :" + this.gender;
  //return this
}

//new를 여러번 사용하면 , 여러개의 객체를 찍어낼 수 있다.
//new라는 키워드가 붙으면 , return this 이렇게 된다고 생각하면 된다네.
const user1 = new User("john", 30, "male");
const user2 = new User("hi", 40, "중성");
const user3 = new User("gg", 50, "여성");
console.log(user1, user2, user3);
