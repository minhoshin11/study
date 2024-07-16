let num = 0;
//while은 조건이 참이면 순차적으로 실행함.
//조건이 만족하지 않으면 실행조차 되지 않는다.
//그 후에 다시 처음으로 오고 다시 실행한다.(무한 반복문이 되는거다.)
while (num < 10) {
  console.log(num, "while문");
  num++;
}

for (let i = 10; i < 10; i++) {
  console.log(i, "for문");
}

let arr = ["banana", "apple", "orange"];
let obj = { name: "철수", age: 20 };
for (let index in arr) {
  console.log(arr[index]);
}
//이 for..in문은 index넘버를 map처럼 처음부터 끝까지 순회해준다.
// let index in arr(변수이름)
// 이렇게 하면, 인덱스 넘버를 가져올 수 있다.
for (let key in obj) {
  console.log(obj[key], "오브젝트");
}

// 집가서 for in ,for of에 대해서 좀 알아봐야 함.
