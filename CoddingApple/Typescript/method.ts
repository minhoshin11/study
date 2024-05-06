type Member = {
    name : string,
    age : number,
    plusOne : (x : number) => number
    changeName : () => void
}
type CutType = (x:string) => string

let CutZero :CutType = function(x){
    let result = x.replace(/^0+/, "");
    return result }
// 이 함수는 문자열 x를 인자로 받아서, 해당 문자열의 시작 부분에 있는 모든 0을 제거합니다.
// 정규표현식 /^0+/은 문자열의 시작(^)에서 연속된 0(0+)을 찾아 대체합니다.
// 그리고 제거된 결과를 반환합니다.

function removeDash(x :string) :number{
    let result = x.replace(/-/g,"");
    return parseFloat(result)
}

// removeDash 함수는 문자열 x를 인자로 받아서, 해당 문자열에서 모든 하이픈(-)을 제거합니다. 
// 정규표현식 /-/g은 전역(g)으로 모든 하이픈을 찾아 대체합니다.
// 그리고 제거된 문자열을 부동 소수점 숫자로 변환하여 반환합니다. 
// parseFloat 함수를 사용하여 문자열을 숫자로 변환합니다.