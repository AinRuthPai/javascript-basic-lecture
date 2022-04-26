// 연산자 operators

// 연산자 줄여서 쓰기
let num = 10;
// num = num + 5;
num += 5;
console.log(num);

console.log("----------------");

// 증가 연산자, 감소 연산자
let num2 = 10;
// result2에 값이 적용되지 않는다.
// 뒤에 ++을 적으면 값을 증가 시키기 전에 result2에 할당한다.
let result2 = num2++;
console.log(result2);

console.log("----------------");

let num3 = 10;
// 앞에 ++를 적으면 result3에 값을 증가시킨 뒤 할당한다.
let result3 = ++num3;
console.log(result3);
