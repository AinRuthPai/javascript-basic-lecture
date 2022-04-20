// 비교 연산자

console.log(10 > 5);
console.log(10 == 5); // 동등 연산자
console.log(10 != 5);

console.log("----------------");

// 동등 연산자
const a = 1;
const b = "1";
console.log(a == b); // true
// 일치 연산자 (타입까지 비교)
console.log(a === b); // false

console.log("----------------");

// 조건문
// if
const age = 30;

if (age > 19) {
  console.log("환영합니다!");
} else if (age === 19) {
  console.log("수능 잘치세요!");
} else {
  console.log("안녕히 가세요");
}

// switch
// 사고 싶은 과일을 묻고 가격 알려주기

let fruit = prompt("무슨 과일을 사고 싶나요?");

switch (fruit) {
  case "사과":
    console.log("100원 입니다.");
    break;
  case "바나나":
    console.log("200원 입니다.");
    break;
  case "키위":
    console.log("300원 입니다.");
    break;
  // 여러 개의 case를 한번에
  case "멜론":
  case "수박":
    console.log("500원 입니다.");
    break;
  // 기본값
  default:
    console.log("다시 입력해주세요!");
}
