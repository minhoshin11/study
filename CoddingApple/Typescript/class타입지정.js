var Car = /** @class */ (function () {
    function Car(a, b) {
        this.name = a;
        this.price = b;
    }
    // tax()에서 소괄호 안쳐놓으면 변수가 들어갈 구멍이 없어서 작동안함.
    Car.prototype.tax = function () {
        return this.price * 0.1;
    }; // 여기서 return b*0.1을 안쓰는 이유: b*0.1을 하게 되면 ,
    return Car;
}());
var 소나타 = new Car('소나타', 3000);
console.log(소나타);
console.log(소나타.tax());
var Word = /** @class */ (function () {
    function Word() {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        var 숫자들 = [];
        var 문자들 = [];
        param.forEach(function (i) {
            if (typeof i === 'string') {
                문자들.push(i);
            }
            else {
                숫자들.push(i);
            }
        });
        this.num = 숫자들;
        this.str = 문자들;
    }
    return Word;
}());
var obj = new Word('kim', 3, 5, 'park');
console.log(obj.num); //[3,5]
console.log(obj.str); //['kim', 'park'] 
