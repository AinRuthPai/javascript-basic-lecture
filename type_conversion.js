// 형변환 (type conversion)

// const mathScore = prompt("수학 점수");
// const engScore = prompt("영어 점수");
// const result = (mathScore + engScore) / 2;
// prompt 입력은 문자형으로 받기 때문에 결과가 이상하게 출력된다.
// 나누기 2는 자동 형변환이 되어 작동한다
// 즉, 50 + 50 = 5050
// 5050 / 2 = 2525 가 출력된다.
// console.log(result);

// String() 형변환
console.log(String(3), String(true), String(false), String(null), String(undefined));
console.log("----------------");

// Number() 형변환
console.log(Number("1234")); // 1234
console.log(Number("1234dfdfdf")); // NaN
console.log(Number(true), Number(false)); // 1 0
console.log("----------------");

// Boolean() 형변환
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
