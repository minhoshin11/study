let 유저리스트 = [
    {name: "Mike", age:30 },
    {name: "Tom", age:10 },
    {name: "Jane", age: 27},
    {name: "Sue", age: 26},
    {name: "Harry", age: 42 },
    {name: "steve", age: 60 }
];

//초기값은 당하는 입장, 결과값이 갈구는 입장
let 결과 = 유저리스트.reduce((초기값,결과값)=>{
   if(결과값.age >= 19){
    초기값.push(결과값.name);
   }
   return 초기값;
}, []);
// 결과값의 나이가 19보다 >= 일때 , 초기값에 결과값 name을 넣어라
//그리고 만들어져있는 배열을 return해라 
console.log(결과);

let 나이 = 유저리스트.reduce((초기값,결과값) =>{
    return (초기값 += 결과값.age)
}, 0);
console.log(나이);


let 이름 = 유저리스트.reduce((초기값,결과값) =>{
    if(결과값.name.length === 3){
        초기값.push(결과값.name);
    }
    return 초기값;
},[]);
//빈 배열 안넣어주면 코드 작동안함. 꼭 배열을 push할 땐 빈배열 넣어야함.



console.log(이름);
// ++  배열.reduceRight(); 라는 것도 있음. 이건 배열 오른쪽부터 시작함
//lodash : 라이브러리 , 배열 연산하기 쉽게 하는 놈