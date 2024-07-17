//클로저는 실행컨텍스트가 정상적으로 제거(종료)되지 못하는 현상

function outerFunc() {
  let count = 0;

  return function innerFunc() {
    count++;
    console.log(count);
  };
}
const counter = outerFunc();
counter();
counter();
counter();
counter();
//실행할 때 마다 1씩 증가한다? 왜 이러는걸까ㅋㅋㅋㅋ
//원래는 자신의 차례가 끝나면, 메모리에서 본인은 제거가 되어야 해.
//innerFunc 시점임
//count++이 보니까? 어? outerFunc가 내 값을 참조하네?
//내 값 참조 안하면 버그가 되는데?
//아니 그럼 나 못사라지는데?
//그래서 메모리에 남겨. 이 현상이 closer가 된다.

//아니 근데 제거를 하긴 하는데 , 저 innerFunc을 "임시보관" 해.
//콜스택 자체에선 빼주되, 메모리 상 어딘가에 보관을 해놔.
//언제까지? => 나를 참조하는 놈이 삭제될 때까지.
//이 (실행컨텍스트(innerFunc)가 정상적으로 제거 되지 못하는 상황)

//이렇게 클로저 현상이 계속 발생하면 "메모리 누수"가 생겨서 퍼포먼스에 문제가 생긴다.
counter = null;
//의도적으로 클로저를 만들어서 사용했다면 , 반드시 "null값으로 만들어주는 코드를 작성해야 한다!!"
