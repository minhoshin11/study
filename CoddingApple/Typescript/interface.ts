interface People {name : string , age? : number}
let 학생 :People = {name : 'kim'}
let 선생 :People = {name : 'kim' , age : 20}

//뭐 이렇게 써도 되는데 하나하나 써도 되는데,
//다르게 써도 되나봄 이름하야 extends

interface Student {name : string}
interface Teacher extends Student{
    age : number
} // extends I.F명을 쓰면 , I.F명 + 속성추가가 가능함.

let 학생임 :Student = {name : 'kim'}
let 선생임 :Teacher = {name : 'kim' , age : 20}

interface 상품임 {
    brand : string ,
    serialNumber : number ,
    model : string[]
}
let 상품 :상품임 = { brand : 'Samsung', serialNumber : 1360, model : ['TV', 'phone'] }


interface 장바구니임{ product : string ,price : number}
let 장바구니 :장바구니임[] = [ { product : '청소기', price : 7000 }, { product : '삼다수', price : 800 } ]

interface 카드추가 extends 장바구니임{
    card : boolean
}

interface 우왕{
    plus : (a:number , b:number) => number,
    minus : (a:number , b:number) => number
}
//여기서 인터페이스 우왕을 쓰기로 했으면 무조건 형식을 따라야함.
// plus , minus 규격을 무조건 써야한다는거지
let 덧뺄함수 :우왕 ={
    plus(a,b){
        return a+b
    },
    minus(a,b){
        return a-b
    }
}


