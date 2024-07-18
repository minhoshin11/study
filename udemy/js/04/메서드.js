//push

//파괴적 메서드
//인스턴스 메서드를 호출했을 때 , 원본 데이터가 변경이 되는 메서드
//unshift,push

//비파괴적 메서드
//이 메서드를 호출 했을 때, 원본 데이터가 변경되지 않는 메서드

//join 배열 다 합치고 , 그사이 뭐 집어넣을 수 있음.
const phone = ["010", "1234", "5678"];
console.log(phone.join("-"));
// result 010-1234-5678

//filter
const words = ["1", "22", "333", "4444", "55555", "666666"];
const result = words.filter((word) => word.length > 4);
//조건에 만족하는 것(true)만 다시 배열에 남기고, 아닌 것은 삭제가 된다.

const words2 = ["excbxc", "oo", "cxbxcbxcbcx", "ssseax", "dssdtsd"];
const result2 = words2.filter((word) => word[0] === "e");

console.log(result2);

//some , every

//some
//array.some(callback(element, index,array),thisArg)
//배열에서 사용하는 고차함수중 하나. (boolean으로 뱉음)
//배열 요소 중 적어도 하나가 주어진 조건을 만족하는지 확인하는데 확인함.
//하나라도 맞으면 true 뱉는거지.

//필터는 4보다 큰 배열만 필터하겠다 => 되고난 후에 새로운 배열을 만듬(파괴적)
//배열에 확인만 하는거라 배열구조를 건드리지 않음(비파괴적)

//every
//이건 some과 다르게 모두 통과되어야 함. 쓰는 방법은 뭐 똑같음.

// find
// 비파괴, 해당 조건에 만족하는 첫번째 요소만 반환
const arrF = [1, 2, 5, 7, 10];
const findArr = arrF.find((arr) => arr >= 6);
console.log(findArr);

//shift
//첫번쨰 요소를 제거함.
const arr = [1, 2, 3, 4, 5, 6];
const arrShift = arr.shift();
console.log(arrShift, "쉬프트로 뺸거");
console.log(arr, "쉬프트결과");

//unshift
const arrUnShift = arr.unshift(0);

//pop

//slice
//음수를 놓으면 뒤에서부터 요소를 잡을 수 있다.

//sort
//배열을 정렬할 때 사용하는 메서드
//
