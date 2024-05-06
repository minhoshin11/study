var 이미지 = document.querySelector('#image');
if (이미지 instanceof HTMLImageElement) {
    이미지.src = 'change.jpg';
}
var 링크 = document.querySelectorAll('.naver');
for (var i = 0; i < 3; i++) {
    var a = 링크[i];
    if (a instanceof HTMLAnchorElement) {
        a.href = 'https://kakao.com';
    }
}
