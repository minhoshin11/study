class Car{
    name : string;
    price : number;
    constructor(a : string , b : number){
        this.name = a;
        this.price = b;
}
// tax()에서 소괄호 안쳐놓으면 변수가 들어갈 구멍이 없어서 작동안함.
tax() : number{
    return this.price*0.1
} // 여기서 return b*0.1을 안쓰는 이유: b*0.1을 하게 되면 ,
//   클래스객체에 접근 못함. 그럼 역할수행도 못함
}
let 소나타 = new Car('소나타',3000)
console.log(소나타)
console.log(소나타.tax())


class Word{
    num;
    str;
  
    constructor(...param : (number | string)[] ){
      let 숫자들 :number[] = [];
      let 문자들 :string[] = [];
  
      param.forEach((i)=>{
        if (typeof i ==='string') {
          문자들.push(i)
        } else {
          숫자들.push(i)
        }
      })
  
      this.num = 숫자들;
      this.str = 문자들;
    }
  }
  let obj = new Word('kim', 3, 5, 'park');
  console.log(obj.num) //[3,5]
  console.log(obj.str) //['kim', 'park'] 