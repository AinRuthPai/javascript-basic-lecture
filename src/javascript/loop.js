// 반복문

// for 문
// 1부터 10까지 로그
for (let i = 0; i < 10; i++) {
  console.log(i + 1);
}
console.log("----------------");

// while 문
let j = 0;

while (j < 10) {
  console.log(j);
  j++; // j 값이 계속 10 이하이면 무한루프
}

console.log("----------------");

// do while 문
let k = 0;

do {
  console.log(k);
  k++;
} while (k < 10);

console.log("----------------");

//break
// while(true)는 무한 반복된다.
// while (true) {
//   let answer = confirm("계속할까요?");
//   if (!answer) {
//     break;
//   }
// }

console.log("----------------");

// continue
// 짝수만 출력하기
for (let a = 0; a < 10; a++) {
  if (a % 2) {
    //나머지가 0이면 continue문을 만나지 못한다.
    continue;
  }
  console.log(a);
}
