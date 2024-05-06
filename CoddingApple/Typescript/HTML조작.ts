let 이미지 = document.querySelector('#image');
if (이미지 instanceof HTMLImageElement){
    이미지.src = 'change.jpg';
} //이미지가 HTMLImageElement에 포함되면 

let 링크 = document.querySelectorAll('.naver');

for (let i = 0; i < 3; i++){
  let a = 링크[i];
  if (a instanceof HTMLAnchorElement){
    a.href = 'https://kakao.com'
  }
} 