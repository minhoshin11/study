//async await
//Promise 설탕을 첨가 한 것
//syntactic sugar 문법
//기존에 promise,then이 어려웠으니 조금 더 쉽게 설탕 친 것이다.
//async 붙힌 건 무조건 resolve야.
//async를 쓰면 코드가 실행이 다 끝난 ㅏ음에 반환을 해야 될텐데
//async 키워드만으로는 비동기실행이 끝나는 걸 기다릴 방법이 없어.

//Promise는 기다려주는거임. 기다렸다가 무엇을 해주는거임.

function getSunIcon() {
  return new Promise((resolve) => {
    resolve("😀");
  });
}
const getSunIcon2 = async () => "😀";
getSunIcon().then((sum) => console.log(sum));
