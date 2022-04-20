// 논리 연산자

// OR
// 이름이 TOM 이거나 성인이면 통과
const name = "Mike";
const age = 30;

if (name === "Tom" || age > 19) {
  console.log("OR 통과!");
}

// AND
if (name === "Mike" && age > 19) {
  console.log("AND 통과!");
} else {
  console.log("AND 에러!");
}

console.log("----------------");

// NOT
// 나이를 입력받아 성인이 아니면 강퇴

// const user_age = prompt("몇살이시죠?");
// const isAdult = user_age > 19;

// if (!isAdult) {
//   console.log("안돼 돌아가");
// }

// 우선순위
// 남자이고 이름이 Mike이거나 성인이면 통과

const gender = "F";
const name_match = "Jane";
const isAdult_match = "true";

// AND가 우선순위가 높아 먼저 평가된다.
// 그래서 Prettier 때문에 자동으로 괄호가 씌워진다.
if ((gender === "M" && name_match === "Mike") || isAdult_match) {
  console.log("통과!");
} else {
  console.log("너도 돌아가라");
}

// 괄호를 바꿔주면 원래 의도대로 동작한다.
if (gender === "M" && (name_match === "Mike" || isAdult_match)) {
  console.log("통과!");
} else {
  console.log("너도 돌아가라");
}
