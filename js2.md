## 변수와 호이스팅, TDZ (Temporal Dead Zone)

- var, let의 차이점

  - var는 한번 선언된 변수를 다시 선언할 수 있다.

  - var는 선언하기 전에 사용할 수 있다.

  - 호이스팅 : **스코프 내부 어디서든 변수 선언은 최상위에 선언된 것 처럼 행동되는 것**

  ```javascript
  var name; // 호이스팅 (hoisting)
  console.log(name); // undefined (선언은 호이스팅되지만, 할당은 호이스팅되지 않기 때문이다)
  name = "Mike";

  // let과 const도 호이스팅이 된다
  console.log(name); // ReferenceError
  let name = "Mike";
  ```

- let과 const도 호이스팅되지만 var처럼 동작하지 않는 이유?

  - TDZ 때문이다. (let, const는 TDZ의 영향을 받는다)

  - TDZ 영역에 있는 변수들은 사용할 수 없기 때문이다.

  - 할당을 하기 전에는 사용할 수 없다. 이는 코드를 예측 가능하게 하고 잠재적인 버그를 줄일 수 있다.

  ```javascript
  console.log(name); // TDZ
  const name = "Mike"; // 함수 선언 및 할당
  console.log(name); // 사용 가능
  ```

### 변수의 생성 과정

- 1. 선언 단계

- 2. 초기화 단계 (undefined를 할당해주는 단계)

- 3. 할당 단계

- var (함수 스코프)

  1. 선언 및 초기화 단계
  2. 할당 단계

  - **이래서 할당 전에 호출해도 오류가 발생하지 않고 undefined가 나온다.**

- let (블록 스코프)

  1. 선언 단계
  2. 초기화 단계
  3. 할당 단계

  - **호이스팅되면서 선언 단계가 이루어지지만, 초기화 단계는 실제 코드에 도달했을 때 작동되기 때문에 ReferenceError가 발생한다.**

- const (블록 스코프)

  1. 선언 + 초기화 + 할당

  - 선언과 동시에 할당하지 않으면 에러가 발생한다.

- 블록 스코프는 모든 코드 블록 내에서 선언된 변수는 코드 블록 내에서만 유효하며 외부에서는 접근할 수 없다. (즉, 지역 변수이다)

- 함수 스코프는 함수 내에서 선언된 변수만 지역 변수가 된다.

## 생성자 함수 // function_new.js 참고

- 객체 리터럴 형식

  ```javascript
  let user = {
    name: "Mike",
    age: 30,
  };
  ```

- 개발을 하다보면 비슷한 객체를 만들어야 하는 상황이 생긴다. (회원, 상품 등)

- 이럴때 사용하는 것이 생성자 함수이다.

  ```javascript
  // 첫 글자는 대문자로 시작하여 함수를 만든다.
  // 이름과 나이를 인자로 받아서 this에 넣어주고 있다.
  function User(name, age) {
    this.name = name;
    this.age = age;
  }
  // new 연산자를 사용하여 함수를 호출한다.
  // 각기 다른 변수명으로 3번 연달아 호출하였다.
  let user1 = new User("Mike", 30);
  let user2 = new User("Jane", 22);
  let user3 = new User("Tom", 17);
  ```

- 어떤 식으로 동작하는가?

  ```javascript
  function User(name, age) {
    // this = {} : 2. 일단 빈 객체를 만들고 this에 할당한다.
    // 3. 함수의 본문을 실행하면서 this에 프로퍼티들을 추가한다.
    this.name = name;
    this.age = age;

    // return this; : 4. 마지막으로 this를 반환한다.
    // 실제로 2, 4 번은 코드상에 존재하지 않는다.
    // new를 붙여 실행하는 순간 이런 식으로 알고리즘이 동작한다.
  }
  // 1. new 함수명() 실행.
  new 함수명();
  ```

- **어떠한 함수라도 new를 붙여 실행하는 순간 저 알고리즘으로 동작하게 된다.**

  - 그래서 생성자 함수는 첫 글자를 대문자로 작성하는 것이 관례이다.

- 메소드 추가

  ```javascript
  function User(name, age) {
    this.name = name;
    this.age = age;
    this.sayName = function () {
      // console.log의 this는 user5를 뜻한다.
      console.log(this.name);
    };
  }
  let user5 = new User("Han", 40);
  user5.sayName(); // 'Han'
  ```

## 객체 메소드, 계산된 프로퍼티 // object_method.js 참고

### 계산된 프로터피 (Computed property)

```javascript
let a = "age";

const user = {
  name: "Mike",
  [a]: 30, // age :30
};
```

### 객체에서 사용할 수 있는 메소드 몇가지

- Object.assign() : 객체 복제

  ```javascript
  // 이 user 변수에는 객체 자체가 들어가 있는 것이 아니라
  // 객체가 저장되어있는 메모리 주소인 객체에 대한 참조값이 저장된다.
  const user = {
    name: "Mike",
    age: 30,
  };
  // 이런 식으로 복사하게 되면 참조값만 들어가게 된다.
  // 이렇게 되면 cloneUser에서 이름을 수정하면 user에서도 이름이 같이 수정된다. (하나의 객체를 두 변수가 접근하기 때문!)
  const cloneUser = user; // XXXXXX : 이 방법으론 복제되지 않는다.

  // 첫 번째 빈 객체는 초기값이다.
  // 두 번째 매개변수부터 들어온 객체들이 초기값에 병합된다.
  const newUser = Object.assign({}, user);

  // 총 3개의 프로퍼티를 가지게 된다.
  const newUserGender = Object.assign({ gender: "male" }, user);

  // 키가 같다면 덮어씌우게 된다.
  const newUserRename = Object.assign({ name: "Tom" }, user);
  ```

  ```javascript
  const user = {
    name: "Mike",
  };
  const info1 = {
    age: 30,
  };
  const info2 = {
    gender: "male",
  };

  // info1, 2가 user에 병합된다.
  Object.assign(user, info1, info2);
  ```

- Object.keys() : 객체 프로퍼티의 키를 배열로 반환한다.

  ```javascript
  const user = {
    name: "Mike",
    age: 30,
    gender: "male",
  };
  Object.keys(user); // ['name', 'age', 'gender']
  ```

- Object.values() : 객체 프로퍼티의 값을 배열로 반환한다.

  ```javascript
  const user = {
    name: "Mike",
    age: 30,
    gender: "male",
  };
  Object.values(user); // ['Mike', '30', 'male']
  ```

- Object.entries() : 키와 값을 모두 배열로 반환

  ```javascript
  const user = {
    name: "Mike",
    age: 30,
    gender: "male",
  };

  Object.entries(user);

  // 키와 값을 쌍으로 묶어서 배열로 반환해준다.
  <!-- [
    ["name", "Mike"],
    ["age", 30],
    ["gender", "male"],
  ] -->
  ```

- Object.fromEntries() : 키와 값 배열을 객체로 반환

  ```javascript
  const arr = [
    ["name", "Mike"],
    ["age", 30],
    ["gender", "male"],
  ];

  Object.fromEntries(arr);
  // 객체로 반환됨
  <!-- {
    name: "Mike",
    age: 30,
    gender: "male",
  }; -->
  ```

## 심볼 (Symbol) // symbol.js 참고

- 유일한 식별자를 만들 때 사용한다.

```javascript
// 프로퍼티의 키가 숫자와 불린형으로 작성되어도
const obj = {
  1: "1입니다.",
  false: "거짓",
};

// 모두 문자형으로 변환되어 반환된다.
Object.keys(obj); // ["1", "false"]

// 실제 접근할 때에도 문자형으로 접근이 가능하다.
obj["1"]; // "1입니다."
obj["false"]; // "거짓"
```

```javascript
// Symbol은 유일한 식별자이다.
const a = Symbol();
const b = Symbol();

// 자료형은 달라도 내용만 일치하면 되는 동등 연산자로 확인
a == b; // false

// 일치 연산자로 확인
a === b; // false

console.log(a); // Symbol()
console.log(b); // Symbol()

// Symbol을 만들 때 설명을 붙일 수 있다.
// 문자열을 전달해 줄 수 있는데, 이 문자열은 심볼 생성에 어떠한 영향도 미치지 않는다.
const id = Symbol("id");
const id2 = Symbol("id");

id == id2; // false
id === id2; // false

console.log(id); // Symbol(id)
console.log(id2); // Symbol(id)
```

```javascript
// Symbol을 객체의 키로 사용
const id = Symbol("id");
const user = {
  name: "Mike",
  age: 30,
  [id]: "myid", // 계산된 프로퍼티 키로 넣음
};

console.log(user); // {name: "Mike", age: 30, Symbol(id): "myid"}
console.log(user[id]); // "myid"

Object.keys(user); // ["name", "age"]
```

- **Object.keys, values, entries, for ... in 문은 키가 Symbol형인 프로퍼티를 건너뛴다.**

- 그럼 이걸 어디에 쓸 수 있나?

  - 특정 위치에 원본 데이터는 건드리지 않고 속성을 추가할 수 있다.

  - 다른 사람이 만들어 놓은 객체에 자신만의 속성을 추가해서 덮어 씌워버리면 안되고, 그렇다고 엄청 길거나 이상한 네이밍을 하는 것도 좋지 못하다.

- Symbol.for() : 전역 심볼 (코드 어디서든 사용할 수 있다.)

  - 전역 변수처럼 이름이 같으면 같은 객체를 가리켜야 할 때 사용한다.

    - 하나의 심볼만 보장받을 수 있다.

    - 없으면 만들고, 있으면 가져오기 때문이다.

    - Symbol 함수는 매번 다른 Symbol 값을 생성하지만, Symbol.for 메소드는 하나의 Symbol을 생성해서 여러 모듈이 키를 통해 같은 Symbol을 공유할 수 있다.

    ```javascript
    const id1 = Symbol.for("id");
    const id2 = Symbol.for("id");

    // for없이 생성했던 것과는 다르게 true가 출력된다.
    id1 === id2; // true

    // 이름을 얻고 싶다면 keyFor()
    Symbol.keyFor(id1); // id

    const id = Symbol("id 입니다.");
    id.description; // "'id' 입니다."
    ```

- 전역 심볼이 아니라면 keyFor를 사용할 수 없다. 대신 description으로 이름을 알 수 있다.

- 숨겨진 Symbol key 보는 법

```javascript
const id = Symbol("id");

const user = {
  name: "Mike",
  age: 30,
  [id]: "myid",
};
// 심볼만 골라서 확인
Object.getOwnPropertySymbols(user); // [Symbol(id)]
// 심볼형 키를 포함한 객체의 모든 키를 보여준다.
Reflect.ownKeys(user); // ["name", "age", Symbol(id)]
```

## 숫자, 수학 메소드

- toString() : 숫자를 문자열로 바꾼다. 괄호 안에 숫자를 넣으면, 그 숫자의 진법으로 변경된다.

  ```javascript
  let num = 10;
  let num2 = 255;

  num.toString(); // "10"
  num.toString(2); // "1010"
  num2.toString(16); // "ff"
  ```

- Math.PI : 원주율

- Math.ceil() : 올림

  ```javascript
  let num1 = 5.1;
  let num2 = 5.7;

  Math.ceil(num1); // 6
  Math.ceil(num2); // 6
  ```

- Math.floor() : 내림

  ```javascript
  let num1 = 5.1;
  let num2 = 5.7;

  Math.floor(num1); // 5
  Math.floor(num2); // 5
  ```

- Math.round() : 반올림

  ```javascript
  let num1 = 5.1;
  let num2 = 5.7;

  Math.round(num1); // 5
  Math.round(num2); // 6
  ```

- toFixed() : 소숫점 자릿수

  ```javascript
  // 요구사항 : 소수점 둘째 자리까지 표현 (셋째 자리에서 반올림)
  let userRate = 30.1234;

  // 숫자를 인수로 받아 그 숫자만큼 소수점 이하 갯수에 반영한다.
  userRate.toFixed(2); // "30.12" : 2번째 자리까지 보여준다
  userRate.toFixed(0); // "30" : 0은 정수만 보여준다
  userRate.toFixed(6); // "30.123400" : 나머지는 0으로 채운다

  // toFixed는 문자열을 반환하므로 Number를 이용하여 숫자로 변경
  Number(userRate.toFixed(2)); // 30.12
  ```

- isNaN() : NaN을 판단한다

  ```javascript
  let x = Number("x"); // NaN
  // x가 NaN인지 검사하는 방법은 isNaN이 유일하다.
  x == NaN; // false
  x === NaN; // false
  NaN == NaN; // false

  isNaN(x); // true
  isNaN(3); // false
  ```

- parseInt() : 문자열을 숫자로 변경한다. Number와 다른 점은 문자가 혼용되어 있어도 동작한다는 점이다. 소수점은 무시하고 정수만 반환한다.

  ```javascript
  let margin = "10px";

  parseInt(margin); // 10
  Number(margin); // NaN

  let redColor = "f3";
  // parseInt는 숫자까지만 읽고 반환하기 때문에 앞이 문자라면 NaN을 반환한다.
  parseInt(redColor); // NaN
  // 두 번째 인수에 16을 전달해서 16진수로 변환
  parseInt(redColor, 16); // 243
  // 문자열 "11"을 2진수로 변환하여 10진수로 변환 : 3
  parseInt("11", 2); // 3
  ```

- parseFloat() : parseInt와 동일하게 동작하지만 부동소숫점을 반환한다.

  ```javascript
  let padding = "18.5%";
  parseInt(padding); // 18
  parseFloat(padding); // 18.5
  ```

- Math.random() : 0 ~ 1 사이의 무작위 숫자를 생성한다.

  ```javascript
  // 1 ~ 100 사이의 임의의 숫자를 뽑고 싶다면?
  Math.floor(Math.random() * 100) + 1;
  // 100까지의 숫자이므로 *100, 5까지라면 *5
  // 최소값이 1이기 때문에 +1
  ```

- Math.max() / Math.min() : 괄호 안의 인수들 중 최대값 / 최소값을 구한다.

- Math.abs() : 절대값을 구한다. (abs는 absolute의 약자이다)

- Math.pow(n, m) : n의 m승 값, 즉 거듭제곱값을 구한다. (pow는 power의 약자이다)

- Math.sqrt() : 제곱근을 구한다. (sqrt는 square root의 약자이다)

  ```javascript
  Math.max(0, 1, 2, 3); // 3
  Math.min(0, 1, 2, 3); // 0
  Math.abs(-1); // 1
  Math.pow(2, 10); // 1024 : 2의 10승
  Math.sqrt(16); // 4
  ```
