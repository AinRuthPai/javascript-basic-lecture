// 자료형 (data type)

// 문자형 String
const name = "Mike";
const age = 30;

const name1 = "Mike"; // 쌍따옴표
// const name2 = 'Mike'; // 홑따옴표
const name3 = `Mike`; // 백틱

const message = "I'm a boy.";
// const message2 = 'I\'m a boy.';

const message3 = `My name is ${name}`;
console.log(message3);

const message4 = `나는 ${30 + 1}살 입니다.`;
console.log(message4);
console.log("----------------");
// 숫자형 Number
const age2 = 30;
const PI = 3.14;

console.log(1 + 2); // 더하기
console.log(10 - 3); // 빼기
console.log(3 * 2); // 곱하기
console.log(6 / 3); // 나누기
console.log(6 % 4); // 나머지 (2)

const x = 1 / 0;
console.log(x); // Infinity

const y = name / 2;
console.log(y); // NaN = Not a Number
console.log("----------------");

// Boolean => true / false 두 가지만 존재한다.
const a = true;
const b = false;

console.log(name == "Mike"); // true
console.log(age > 40); // false
console.log("----------------");

// null & undefined => 존재하지 않는 값 & 값이 할당되지 않음
let asd;
console.log(asd); // undefined
// 유저가 존재하지 않는다는 의미
let user = null;
console.log("----------------");

// typeof 연산자 => 변수의 자료형을 알아낼 때 사용한다.
console.log(typeof 3); // number
console.log(typeof name); // string
console.log(typeof true); // boolean
console.log(typeof "xxx"); // string
// null은 객체(object)가 아니다!!!! 자바스크립트의 초기버전 오류 중 하나이다.
console.log(typeof null); // object XXXX
console.log(typeof undefined); // undefined

// alert & prompt & confirm
// const day = prompt("예약일을 입력해주세요.", "2022-01-");
// alert(day); // 취소를 누르면 null 반환

// const isDelete = confirm("정말 삭제하시겠습니까?");
// console.log(isDelete); // 확인: true, 취소: false
