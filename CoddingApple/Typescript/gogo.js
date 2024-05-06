var User임 = /** @class */ (function () {
    function User임() {
        this.z = 30;
    }
    User임.x = 10; //User임.으로만 사용가능, User임.에서만 수정가능
    User임.y = 20; // User.으로만 사용가능 , class 내외부 전부 수정가능
    return User임;
}()); //클래스내부에서 사용가능 ,extends하면 거기 내부에서도 사용가능
var User임요 = /** @class */ (function () {
    function User임요() {
    }
    User임요.addOne = function (파라미터) {
        User임요.x += 파라미터;
    };
    User임요.printX = function () {
        console.log(User임요.x);
    };
    User임요.x = 10;
    User임요.y = 20;
    return User임요;
}());
User임요.addOne(3);
User임요.addOne(10);
User임요.printX();
// 1. addOne() 함수를 만들었습니다. 그리고 static을 붙여줬음 
// 그러면 이제 User임요.addOne() 이렇게 쓸 수 있으니까요.
// 2. addOne(파라미터) 실행하면 x속성에 파라미터만큼 더해달라고 했습니다.
// 3. 그리고 printX() 실행하면 콘솔창에 User.x 출력해달라고 했습니다. 
// 의도대로 잘 동작하는 군요. 
