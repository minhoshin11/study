//async

const task1 = () => {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      resolve("task1 시작");
    }, 1000);
  });
};

const task2 = async () => {
  await delay(1000);
  return "task1 시작";
};

//async는 return 되는 값이 resolve가 해주는 것처럼 처리하는 것.
//setTimeout같이 시간을 조작하는 키워드가 없다.
//await은 그게 가능하다.
//비동기 순서보장

//아까 콜백지옥이 있었는데 , 이런식으로 변환이 가능하다.
// task1()
//   .then(() => task2())
//   .then(() => task3())
//   .then(() => task4())
//   .then(() => task5())
//   .then(() => task6())
//   .then(() => task7());

const desk1 = async () => "tesk1시작";
const desk2 = async () => "tesk2시작";
const desk3 = async () => "tesk3시작";
const desk4 = async () => "tesk4시작";
const desk5 = async () => "tesk5시작";
const desk6 = async () => "tesk6시작";
const desk7 = async () => "tesk7시작";

const startDesk = async () => {
  const msg1 = await desk1();
  const msg2 = await desk2();
  const msg3 = await desk3();
  const msg4 = await desk4();
  const msg5 = await desk5();
  const msg6 = await desk6();
  const msg7 = await desk7();
  console.log(msg1, msg2, msg3, msg4, msg5, msg6, msg7);
};
startDesk();

// 핵심은 비동기를 병렬로 실행하는 것이다.

const startDesk2 = async () => {
  const deskPromise1 = task1();
  const deskPromise2 = task2();
  const deskPromise3 = task3();
  const deskPromise4 = task4();
  const deskPromise5 = task5();
  const deskPromise6 = task6();
  const deskPromise7 = task7();
  //이렇게 변수에 await함수를 담으면 , 매우 빠르게 읽고
  //병렬로 실행하게 된다.
  //await이 가장 오래 걸리는 거 기준으로 다같이 끝나게 된다.
  //이 방법이 하나 있고, promise.all 방법이 있다.
  const msg1 = await desk1();
  const msg2 = await desk2();
  const msg3 = await desk3();
  const msg4 = await desk4();
  const msg5 = await desk5();
  const msg6 = await desk6();
  const msg7 = await desk7();
  // console.log(msg1, msg2, msg3, msg4, msg5, msg6, msg7);
};
startDes2k();

//가독성 좋게 쓰는 ㅓ싱크 어웨잇
const fetchTodo = async () => {
  const res = fetch("주소임!");
  const json = await res.json();
  console.log(json);
};
