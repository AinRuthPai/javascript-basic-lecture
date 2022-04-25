// Symbol
// 다른 개발자가 만들어 놓은 객체라고 가정

const user = {
  name: "Mike",
  age: 30,
};

// 나의 작업
// user.showName = function () {}; // 사용자 메세지에 그대로 출력되므로 X
const showName = Symbol("show name");
user[showName] = function () {
  console.log(this.name);
};
// 다른 개발자가 만들어 놓은 코드에 영향을 미치지 않는 선에서 메소드 추가
user[showName]();

// 사용자가 접속하면 보는 메세지
for (let key in user) {
  console.log(`His ${key} is ${user[key]}.`);
}
