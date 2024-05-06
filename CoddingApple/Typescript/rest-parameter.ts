let person = { student : true, age : 20 }


function 함수({student, age} :{student: boolean , age : number}){
  console.log(student, age)
}
함수({ student : true, age : 20 })

function 최댓값(...x : number[]) {
    let result = 0;
    x.forEach((i)=>{
      if (result < i) {
        result = i
      }
    })
    return result;
  }
  console.log(최댓값(4,6,3,2)) 