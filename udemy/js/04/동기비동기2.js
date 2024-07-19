// function task1(callback) {
//   setTimeout(() => {
//     console.log("task1 시작");
//     callback();
//   }, 2000);
// }

// function task2(callback) {
//   console.log("task2 시작");
//   callback();
// }

// function task3(callback) {
//   console.log("task3 시작");
//   callback();
// }

// function task4() {
//   console.log("task4 시작");
// }

// // 콜백 체인을 이용하여 순차적으로 작업을 실행
// task1(() => {
//   task2(() => {
//     task3(() => {
//       task4();
//     });
//   });
// });

//Promise
//두개 함수를 매개변수로 받아올 수 있다.
//resolve : 해결하다 , reject : 거절하다 => reject는 실패,거절상황에서 씀
const promise = new Promise((resolve, rejected) => {
  console.log("프로미스 시작");
  rejected();
  //   resolve(); //이렇게 함수를 호출하면, 상태는 pending -> fulfilled가 된다.
});

promise //
  .then(() => {
    console.log("성공");
  })
  .catch(() => {
    console.log("실패");
  });

//매개변수 안쓸거면 이런식으로 "_" 언더바 해주면 됨.
const promise1 = new Promise((_, rejected) => {
  console.log("프로미스 시작");
  rejected();
});
