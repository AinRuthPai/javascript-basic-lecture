// forEach

let arr = ["Mike", "Tom", "Jane"];

arr.forEach((name, index) => {
  console.log(`${index + 1}. ${name}`);
  // 1. Mike
  // 2. Tom
  // 3. Jane
});

// find
let arr2 = [1, 2, 3, 4, 5, 6];

const result = arr2.find((item) => {
  // 짝수 찾기, return값이 true일 때 멈추므로 2만 반환된다.
  return item % 2 === 0; // 2
});

console.log(result);

// findIndex
// 객체가 들어있는 배열의 경우는 indexOf로는 찾기 힘들다.
let userList = [
  { name: "Mike", age: 30 },
  { name: "Jane", age: 27 },
  { name: "Tom", age: 10 },
];
// 미성년자 찾기
const result2 = userList.findIndex((user) => {
  if (user.age < 19) {
    return true;
  }
  return false;
});

console.log(result2); // 2

// filter
let arr3 = [1, 2, 3, 4, 5, 6];

const result3 = arr2.filter((item) => {
  // 짝수 찾기, filter는 모든 요소를 반환한다.
  return item % 2 === 0; // 2
});

console.log(result3); // [2, 4, 6]
