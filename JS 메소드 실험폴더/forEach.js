//새로운 배열을 반환하지 않고
//각 배열 요소에 대해 제공된 함수를 한 번씩 실행합니다.
//forEach 안에는 함수를 받음.
//map과 달리 체이닝(연속적으로 메서드호출)이 불가능함.

let arr = ["마이크","톰","제인"]

arr.forEach((name,index) => {
    console.log(name);
});

arr.forEach((name,index)=>{
    console.log(`${index +1}. ${name}`);
}); //객체 리터럴을 사용할 땐 `(백틱)을 사용해야한다.