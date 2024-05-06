//reduce :배열을 돌면서 원하는 작업을 한 후 최종값을 반환
//인수로 함수를 받음
//reduce를 썼을 때 (누적계산값, 현재값) => {return 계산값}

//인수 : 변수에 들어가는 놈
let 배열 = [1, 2, 3, 4, 5];

const 긴함수임 = 배열.reduce(function(누적값,현재값){
    return 누적값 + 현재값;
});  
console.log(긴함수임);

const result = 배열.reduce((누적값,현재값)=>{
    return 누적값 + 현재값;
}); //function 제거 , 화살표 생성
console.log(result);

// function : =>
// return {} : 같이 삭제해야한다.

const 화살표임 = 배열.reduce((누적값,현재값) => 누적값 + 현재값);
console.log(화살표임); ///중괄호와 return 제거는 같이!!

message = "happy"
console.log(message.length * 2);