//인터페이스는 관례로 첫글자가 대문자임.
console.log("hello world");
let msg: string | number = "hello world";
msg = "10";

console.log(msg);

//타입명시 > tuple(튜플)
//해당 자리에 정확하게 타입지정을 해주는 것을 튜플이라고 함.
const arr2: [number, string, number] = [1, "A", 3];

//tuple을 사용하지 않고 쓰려면 , (자료형|자료형[]) 이렇게 해주면 된다.
const arr3: (number | string)[] = [1, "A", 3];

//객체
const obj: {} = {};
const obj2: { name: string; age: number } = { name: "kim", age: 20 };

//리터럴 타입
//그 변수에 들어갈 값을 정확하게 지정하는 것이다.
let num: 10 = 10;

let obj3 = {
  name: "kim",
};

const printName = (name: "kim") => {
  console.log(name);
};

interface User {
  name: string;
  age: number;
  gender: string;
  height: number;
}

const obj6: User = {
  name: "김과장",
  age: 50,
  gender: "몰루",
  height: 12,
};

//값을 못바꾸게 하고 싶으면 readonly라는 속성을 쓰면 된다.

//옵셔널 프로퍼티(optional property)
//객체 안에서 name? 이렇게 쓰는거임. 필수가 아니게 만들기

//병합(Interface merging)
//똑같은 인터페이스 이름이 정의가 되면 , 인터페이스는 합쳐지게 된다.
//interface User , interface User 이렇게 두개가 있으면 두개 조건들이 합쳐지는 거임.

//extends(확장)
interface Job extends User {
  money?: string;
  job?: string;
}
const jobObj: Job = { name: "박과장", age: 60, gender: "남자", height: 40 };

//인덱스 시그니쳐
//객체의 속성 이름과 속성 값의 타입을 정의하는 방법이다.
//이를 통해 특정 형태를 가지는 객체를 타입으로 표현할 수 있다.
//단점은 속성이 명확하지 않다는거임
//걍 안쓰는게 낫네

//타입 별칭(Type Alias)
//새로운 타입을 정의하는 방법
//이렇게 타입을 지정할 수 있는거임.
//근데 많아지면 가독성이 너무 안좋은거야.
//type T로 시작하는게 규칙임.
//string,number,object,[],boolean,undefined, null 밖에 못썼는데,
//새로운 타입을 내가 만들 수 있는거임!

type TPhoneColor =
  | "black"
  | "red"
  | "orange"
  | "red"
  | "blue"
  | "violet"
  | "red";

const phoneColor: TPhoneColor = "blue";

//type , interface 유사점 및 차이점
//공통점 : 객체타입 정의 가능 , 확장 가능

//차이점 : 1.선언방식 , 2.확장방식 , 유니언타입(Type Alias) 및 인터섹션(Type Alias) 타입
//3.Type Alias는 병합이 안됨.
//interface는 유니언 타입이 안됨.(string|number) 이런거.

// 인터섹션 방법(Type Alias)
//

//인터페이스는 class가 구현이 가능하지만, type은 class가 구현이 안된다.
// interface User {
//     name: string;
//     age: number;
//   }

//   class Person implements User {
//     name: string;
//     age: number;

//     constructor(name: string, age: number) {
//       this.name = name;
//       this.age = age;
//     }
//   }
//마우스 올려봤을 때 , 인터페이스는 구성물을 잘 보여주지만
//타입은 안보여줘.

//정석 : 객체 쓸 때 인터페이스 , 아니면 타입
//근데 수코딩형님은 무조건 Type만 쓴대.
//상속이 안되고, 자동병합이 안되는 것 빼곤 다 좋대.
//마우스 올렸을 때 툴팁으로 잘보여서도 장점이래.
//실무에서 해보니까 타입으로만 써도 문제 없긴함
//
//인터페이스의 단점 : 툴팁(마우스 갖다댔을 때)으로 안보여줌.
//병합된 걸 찾는 것도 불편함

//엘리먼트를 0번째만 걍 뽑아 쓰고 싶은데 , 자료형이 다 달라.
//이럴 때 쓰는 거인듯.

//제네릭
//타입을 미리 지정하지 않고 사용하는 시점에 타입을 정의해서 쓸 수 있는 문법
function firstElements(elements: number[] | string[]) {
  return elements[0];
}
console.log(firstElements([1, 2, 3]));
console.log(firstElements(["aa", "dd"]));

//1.등호 오른쪽에 , <T>를 해준다.
const firstElements2 = <T>(elements: T[]) => {
  return elements[0];
};
//2.함수<자료형>(매개변수)
console.log(firstElements2<number>([1, 2, 3]));
console.log(firstElements2<string | number>(["dd", 2, 3]));

//타입의 공통처리를 위해서 , 제네릭 문법을 사용한다.
//제네릭은 "넘겨주는 타입이 치환이 되는거구나!"

type TCar<T> = {
  name: string;
  option: T;
};

const car1: TCar<string> = {
  name: "sonata",
  option: "auto",
};

const car2: TCar<number[]> = {
  name: "sonata",
  option: [1, 2, 3],
};

//제네릭에 제약을 거는 방법
//extends를 사용하면 제네릭에 제약을 걸 수 있다.
//이번거는 length속성이 있는 놈만 가능하도록 제약을 건 것이다.
const getLength = <T extends { length: number }>(item: T): void =>
  console.log(item);
