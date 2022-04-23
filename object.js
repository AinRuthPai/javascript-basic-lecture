// 객체

const superman = {
  name: "clark",
  age: 30,
};
superman.hairColor = "black";
superman["hobby"] = "football";
delete superman.age;
console.log(superman);

console.log("----------------");

// 이름과 나이를 받아서 객체를 반환하는 함수

function makeObject(name, age) {
  return {
    name,
    age,
    hobby: "football",
  };
}

const Mike = makeObject("Mike", 30);
console.log(Mike);

console.log("age" in Mike); // true
console.log("birthday" in Mike); // false

console.log("----------------");

// 객체 in
// 나이를 받아서 성인인지 아닌지 구분하는 함수

function isAdult(user) {
  if (
    !("age" in user) || // user에 age가 없거나
    user.age < 20 // 20살 미만이거나
  ) {
    return false;
  }
  return true;
}

const Tom = {
  name: "Tom",
  age: 40,
};

const Jane = {
  name: "Jane",
};

console.log(isAdult(Jane));

console.log("----------------");

// 객체 for ... in
const Ruby = {
  name: "Ruby",
  age: 35,
};

// key 는 루비가 가진 프로퍼티를 의미한다
// key 가 아닌 아무거나 적어도 상관없다
for (key in Ruby) {
  console.log(key); // name, age
  console.log(Ruby[key]); // Ruby, 35
}
