// 객체의 메소드

// let boy = {
//   name: "Mike",
//   sayHello: function () {
//     console.log(`Hello, I'm ${this.name}`);
//   },
// };

// let girl = {
//   name: "Jane",
//   sayHello: function () {
//     console.log(`Hello, I'm ${this.name}`);
//   },
// };

// // this는 런타임에 결정되므로 같은 this여도 각자 다른 이름이 나오게 된다

// boy.sayHello();
// girl.sayHello();

console.log("----------------");

// this의 사용법
// let boy = {
//   name: "Mike",
//   showName: function () {
//     // boy.name : error!
//     // this.name : "Mike"
//     console.log(this.name);
//   },
// };

// let man = boy;
// boy = null;

// man.showName();

console.log("----------------");

// 화살표 함수
let boy = {
  name: "Mike",
  // 일반 함수는 this가 boy를 가리킴
  // 화살표 함수는 this가 window를 가리킴
  sayThis: () => {
    console.log(this);
  },
};

boy.sayThis();
