// 문자열 메소드
// 책의 목차
let list = ["01. 들어가며", "02. JS의 역사", "03. 자료형", "04. 함수", "05. 배열"];

// 숫자를 제외하고 문자만 받아오기
let newList = [];

for (let i = 0; i < list.length; i++) {
  newList.push(list[i].slice(4));
}

console.log(newList);

console.log("----------------");

// 금칙어 : 콜라
function hasCola(str) {
  // 아래 주석과 같은 상황을 방지하기 위해 -1보다 큰가를 꼭 입력해야 한다.
  if (str.indexOf("콜라") > -1) {
    console.log("금칙어가 있습니다.");
  } else {
    console.log("통과.");
  }
}

hasCola("와 사이다가 짱이야!"); // -1을 반환, if문에서 -1은 true이기 때문에 금칙어 메세지 출력
hasCola("무슨 소리, 콜라가 최고");
hasCola("콜라"); // 0을 반환, if문에서 0은 false, 통과문 출력

console.log("----------------");

// 금칙어 : 물
// includes 활용 (굳이 index를 확인하지 않고 문자가 있는지 없는지만 확인)
// 문자가 있으면 true, 없으면 false 반환

function hasWater(str) {
  // 아래 주석과 같은 상황을 방지하기 위해 -1보다 큰가를 꼭 입력해야 한다.
  if (str.includes("물")) {
    console.log("금칙어가 있습니다.");
  } else {
    console.log("통과.");
  }
}

hasWater("목이 많이 마르네...");
hasWater("아 물 마시고 싶다.");
hasWater("물");
