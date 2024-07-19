// input value 가져오는 법
// setTimeout(() => {
//   const inputEl = document.querySelector("input");
//   console.log(inputEl.value);
// }, 3000);

//이벤트
//사용자가 웹 페이지의 특정 요소의 상호 작용할 때 발생하는 것
const h1El = document.querySelector("h1");
const incrementBtn = document.querySelector("#plus");
const decrementBtn = document.querySelector("#minus");
console.log(h1El, incrementBtn, decrementBtn);

let i = 0;

decrementBtn.addEventListener("click", () => {
  if (i > 0) h1El.innerText = --i;
});

incrementBtn.addEventListener("click", () => {
  if (i < 10) h1El.innerText = ++i;
});
