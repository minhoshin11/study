//this
//this <- 자기자신을 호출한 객체!
//this -> 자신을 호출한 객체를 가리키는 특수한 키워드
//this 쓸거면, 화살표 쓰지말아라.
//화살표 쓰면 , 자신이 속한 외부스코프에서 사용한다.

//코드러너는 제대로 구현해주지 않아서
//이건 html파일에 스크립트태그를 연결해서 봐야 한다.

//가장 겉에서 this를 호출하면 window라는 객체가 나온다.
const membership = {
  name: "하이",
  //객체의 키의 함수로 들어가 있을 때 그것을 메서드라고 부른다.
  //멤버쉽의 joined 메서드
  joined: function () {
    return `${this.name}님이 가입했습니다.`;
  }.bind({ name: "코딩하는 사람" }),
};
console.log(this); // 이건 윈도우임
console.log(membership.joined());

membership.joined(); // 이건 멤버쉽의 joined이기 때문
//그냥 this 찍어보면 , window가 나오는 이유는
// 기본적으로 window.~~ 이런 식으로 되어 있기 때문이다.
