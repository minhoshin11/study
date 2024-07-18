function Shape(color, width, height) {
  //   super.call(this, color);
  this.color = color;
  this.width = width;
  this.height = height;
  this.getColor = function () {
    return this.color * this.height;
  };
}

const shape1 = new Shape("red", 0, 20);
console.log(shape1);

//class로 어케 만듬?
class Shape3 {
  constructor(color) {
    this.color = color;
  }
  getColor() {
    return `이 도형의 색상은 ${this.color}입니다.`;
  }
}
const shape2 = new Shape3("red");
console.log(shape2);

//set
