// function tesk1(callback) {
//   console.log("tesk1 시작");
//   callback();
// }

// function tesk2(callback) {
//   console.log("tesk2 시작");
//   callback();
// }
// function tesk3(callback) {
//   console.log("tesk3 시작");
//   callback();
// }
// function tesk4() {
//   console.log("tesk4 시작");
// }

// //이걸 올바르게 순서를 보장하려면
// tesk1(() => {
//   tesk2(() => {
//     tesk3(() => {
//       tesk4();
//     });
//   });
// });

//이렇게 쓰면 순서보장은 되는데 , 장풍쏘듯이 매우 가독성이 안좋아진다.
//우린 이 상황을 콜백지옥이라고 한다.
//이러한 단점을 해결하기 위해 등장한 것이 Promise다.

//promise 매개변수 순서는 못바꿈. 근데 안쓰는 거 언더바로 처리 가능
// const promise = new Promise((_, reject) => {
const promise = new Promise((resolve, reject) => {
  console.log("무언가 하는중");
  resolve("성공"); //이건 타입스크립트가 아니라서 오류가 안뜨는 거임. 뭐라도 넘겨줘야 가능함.
  reject(new Error("failer")); //이건 사유를 넘겨줘도,안넘겨줘도 되긴 하는데, 안넘겨주면 undefined가 나옴. promise도 reject로 나옴.
});

promise
  .then((value) => {
    console.log(value);
  }) // then 성공했을 때
  .catch((error) => {
    console.error(error);
  }) //catch 실패 했을 때
  .finally(); //then ,catch 여부와 상관없이.

promise
  .then(
    (value) => {
      console.log(value);
    },
    (error) => {
      console.error(error);
    }
  ) //then에 이렇게 value,error를 하면 catch를 사용할 필요가 없다.
  //근데 실무에선 catch 있는 게 좋다고 함.
  .finally();

//콜백지옥 해결법
task1()
  .then(() => task2())
  .then(() => task3())
  .then(() => task4())
  .then(() => console.log("모든작업 끝"));

const get1 = async () => {
  await delay(1000);
  return "1";
};
const get2 = async () => {
  await delay(1000);
  return "2";
};

const get3 = async () => {
  await delay(2000);
  return "3";
};
//가장 심플한 비동기 순서보장
//async하고 , await을 순서대로만 쓰면 되는 것임 ㅇㅇ

const getAllIcon = async () => {
  const sum = await get1();
  const wave = await get2();
  const cloud = await get3();
  console.log(`${sum} ${wave} ${cloud}`);
};
//근데 await 연속으로 쓰면 또 단점이 있다고 함.
//순서 보장이 너무 잘되서 좀 오래걸림ㅇㅇ (현재 5초정도)
//그래서 또 JS에선 기능을 하나 내놓았대^^
//Promise.all

Promise.all([get1(), get2(), get3()]).then((icons) => {
  console.log(icons);
});
//이렇게 Promise.all을 쓰면, 총 2초 걸린다.
//비동기인 놈을 병렬로 처리하기 위해서 , 이놈을 쓰는 것이야
//근데 이것도 하나가 실패나면 또 다 뻑남
//Promise.allSettled (이건 또 1실패해도 성공한 거 가져 쓸 수 있음.)
//객체형태로 값이 나옴 ㅇㅇ
