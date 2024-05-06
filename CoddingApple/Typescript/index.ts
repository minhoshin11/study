var 좋아하는거 :{song : string, singer:string} = {song: '신나는노래' , singer : '빅뱅'}


let project : {
    member: string[], day:number, started: boolean
}= {member : ['kim','park'] , day : 30,started : true 
} //왼쪽 오른족 짝맞추기임.

let 회원들 : (number | string)[] = [1,'2',3];
let 오브젝트 : {a : string | number } = {a: '123'}

let 회원들임 : (number | string)[] = [1,'2',3];

let 학교 : {
    score : (number|boolean)[],
    teacher : string,
    friend : string | string[]
}
= {
    score : [100, 97, 84],
    teacher : 'Phil',
    friend : 'John'
}
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher]
//함수에 타입 지정하는 법 & void


