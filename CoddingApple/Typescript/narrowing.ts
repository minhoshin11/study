type Fish = {swim : string}
type Bird = {fly : string}

function 함수입니다(animal : Fish | Bird){
    if('swim' in animal){
        console.log(animal.swim);
    }
}

enum enumType{
    신나 ,
    노래 , 
    와우 , 
}