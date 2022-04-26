// 계산된 프로퍼티
let n = "name";
let a = "age";

const user = {
  [n]: "Mike",
  [a]: 30,
  [1 + 4]: 5,
};
console.log(user);

console.log("----------------");

// 어떤 것이 key가 될지 모를 때 유용하다.
function makeObj(key, val) {
  return {
    [key]: val,
  };
}
const obj = makeObj("나이", 33);
console.log(obj);

console.log("----------------");

// 객체 메소드
const userObj = {
  name: "Mike",
  age: 30,
};

const userObj2 = Object.assign({}, userObj);
userObj2.name = "Tom";

console.log(userObj);
console.log(userObj2);

console.log("----------------");

const keys = Object.keys(userObj);
console.log(keys);

console.log("----------------");

const values = Object.values(userObj);
console.log(values);

console.log("----------------");

const entries = Object.entries(userObj);
console.log(entries);

console.log("----------------");

let arr = [
  ["mon", "월"],
  ["tue", "화"],
];

const fromEntries = Object.fromEntries(arr);
console.log(fromEntries);
