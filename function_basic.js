//함수

// function showError() {
//   alert("에러 발생!");
// }
// showError();

console.log("----------------");

// 매개변수가 있는 함수
function sayHello(name) {
  const msg = `Hello, ${name}`;
  console.log(msg);
}
sayHello("Mike");
sayHello("Tom");
sayHello("Jane");

console.log("----------------");

// 매개변수가 들어오지 않았을 때
function sayNotHello(name) {
  console.log(name); // undefined
  let msg = `Hello`;
  if (name) {
    // name이 undefined이므로 false, 그러므로 Hello만 출력됨
    msg = `Hello, ${name}`;
    // msg += `, ${name}`;
  }
  console.log(msg);
}
sayNotHello();

console.log("----------------");

// 호출 순서
let message = `Hello`;
console.log("함수 호출 전");
console.log(message);

function foo(name) {
  if (name) {
    message += `, ${name}`;
  }
  console.log("함수 내부");
  console.log(message);
}

foo("Tom");
console.log("함수 호출 후");
console.log(message);

console.log("----------------");

// OR 사용
function boo(name) {
  let newName = name || "friend";
  let msg = `Hello, ${newName}`;
  console.log(msg);
}
boo();
boo("Jane");

console.log("----------------");

// 매개변수 기본값 설정
function poo(name = "friend") {
  let msg = `Hello, ${name}`;
  console.log(msg);
}
poo();
poo("Tom");

console.log("----------------");

// return으로 값 반환
function add(num1, num2) {
  return num1 + num2;
}

const result = add(2, 3);
console.log(result);
