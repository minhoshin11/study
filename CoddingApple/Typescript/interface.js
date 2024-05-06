var 학생 = { name: 'kim' };
var 선생 = { name: 'kim', age: 20 };
var 학생임 = { name: 'kim' };
var 선생임 = { name: 'kim', age: 20 };
var 상품 = { brand: 'Samsung', serialNumber: 1360, model: ['TV', 'phone'] };
var 장바구니 = [{ product: '청소기', price: 7000 }, { product: '삼다수', price: 800 }];
//여기서 인터페이스 우왕을 쓰기로 했으면 무조건 형식을 따라야함.
// plus , minus 규격을 무조건 써야한다는거지
var 덧뺄함수 = {
    plus: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    }
};
