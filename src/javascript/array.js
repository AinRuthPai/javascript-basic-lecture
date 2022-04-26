// 배열

let days = ["mon", "tue", "wed"];

days.push("thu");
days.unshift("sun");

console.log(days);
console.log(days.length);

for (let index = 0; index < days.length; index++) {
  console.log(days[index]);
}

for (let day of days) {
  console.log(day);
}
