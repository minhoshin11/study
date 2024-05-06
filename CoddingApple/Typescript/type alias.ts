type Girlfriend = {
    readonly name : string
}

const 여친 : Girlfriend ={
    name : '앰버'
}

type x = {x :string }
type y = {y :string }
type xy = x & y

// 이렇게 쓰면 color속성을 써도 , 쓰지 않아도 문제 안삼겠다는 소리임.
type 숙제2 = {color? : string , 
            size : number,
            readonly position : number[] }

type 검사3 = { name: string ,phone : number , email : string }
const 숙제3 = { name : 'kim', phone : 123, email : 'abc@naver.com' }


type User = { name : string, email? : string, phones : string } 
type Adult = { adult : boolean }

type NewUser = User & Adult;

const rock = function rock(a : '가위'|'바위'|'보') :('가위'|'바위'|'보')[]{
    return['가위','보']
} //파라미터 : return값[]

console.log(rock)
