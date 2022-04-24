// 생성자 함수 : 상품 객체를 생성

function Item(title, price) {
  // this = {};
  this.title = title;
  this.price = price;
  this.showPrice = function () {
    console.log(`가격은 ${price}원 입니다.`);
  };
  // return this;
}
// new를 붙이지 않는다면 위의 함수는 일반 함수로 취급되기 때문에
// 아무것도 return하지 않아 undefined를 출력한다.
const item1 = new Item("인형", 3000);
const item2 = new Item("가방", 4000);
const item3 = new Item("지갑", 9000);

console.log(item1, item2, item3);

item3.showPrice();
