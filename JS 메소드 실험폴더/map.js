//map은 배열에서 사용하는 메소드임.
//인자로 함수가 들어간다.
//모든 배열요소들에게 함수를 실행한다.
//그리고 함수에서 나온 값으로 새로운 배열을 생성해서 담는다.


const days = ["Mon" , "Tue" , "Wed" , "Thurs" , "Fri"]
const 그냥호출 = 인자 => console.log(인자); //그냥 요소별로 찍어줌.
const 맵함수만 = days.map(그냥호출); //요소들을 배열로 묶어서 찍어줌.
//

const 리터럴맵함수 = 인자 => `야호 ${인자}이다!`
const 다른놈 = days.map(리터럴맵함수); //야호 ""이다! 라는 것이 배열로 나옴.
console.log(다른놈)
//결과 : [ '야호 Mon이다!', '야호 Tue이다!', '야호 Wed이다!', '야호 Thurs이다!', '야호 Fri이다!' ]

const 인덱스는 = days.map((인자 , index) => `#${index + 1} ${인자}`)
console.log(인덱스는)
//map은 인자 하나만 받을 수도 있지만 , 그렇지 않을 수도 있음.
//그게 index임
//결과 : [ '#1 Mon', '#2 Tue', '#3 Wed', '#4 Thurs', '#5 Fri' ]

const strings = ['apple', 'banana', 'orange'];
const upperCaseStrings = strings.map(str => str.toUpperCase());
console.log(upperCaseStrings); // 출력: ['APPLE', 'BANANA', 'ORANGE']

