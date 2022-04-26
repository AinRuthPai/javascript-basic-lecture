## 변수

- 어떤 정보에 이름을 붙여서 사용한다.

  - ex)
  - name = "Mike";
  - age = 30;

### let & const

- let은 선언 후에도 다른 **값**으로 **변경 가능**하다.

  - ex)
  - let grade = "F";
  - grade = "A";
  - (의도적으로 let을 생략한다.)

- const는 절대로 바뀌지 않는 **상수**를 입력할 때 사용한다.

- **개념 정리**

  1. 변수는 문자와 숫자, $와 \_만 사용한다.
  2. 첫 글자는 숫자가 될 수 없다.
  3. 예약어는 사용할 수 없다.
  4. 가급적 상수는 대문자로 선언한다.
  5. 변수명은 읽기 쉽고 이해할 수 있게 선언한다.

## 자료형 // data_type.js 참고

- **typeof**는 다른 개발자가 사용한 변수의 타입을 알아내거나 API 통신 등을 통해 받아온 데이터들을 타입에 따라 다른 방식으로 처리해야 할 때 사용한다.

- 문자형끼리 더하면 이어지고, 문자형과 숫자형을 더하면 모두 문자형으로 취급된다.(자동 형변환)

## alert, prompt, confirm // 알려줌, 입력 받음, 확인 받음

- 사용자와 상호작용할 수 있는 대화상자이다.

- 단점: 스크립트 일시 정지, 스타일링 X

## 형변환 // type_conversion.js 참고

- String() // 문자형으로 변환
- Number() // 숫자형으로 변환
- Boolean() // 불린형으로 변환

- 형변환이 필요한 이유: 서로 다른 자료형이면 의도치 않은 동작이 발생할 수 있기 때문이다.

- 의도를 가지고 형변환을 하는 것을 **명시적 형변환** 이라 한다.

- **그냥 외워야 한다.**

  - Number("문자"); // NaN 이다.
  - Number(null); // 0 이다.
  - Number(undefined); // NaN 이다.
  - Boolean(0) // false
  - Boolean("0") // true
  - Boolean("") // false
  - Boolean(" ") // true

- **Boolean()** 형변환은 **false** 케이스만 기억하면 된다.

  - 숫자 0
  - 빈 문자열 ""
  - null
  - undefined
  - NaN

  - **이 외에는 모두 true**를 반환한다.

## 연산자 // operators.js 참고

- **나머지를 어디에 사용?**

  - 홀수 : X % 2 = 1
  - 짝수 : Y % 2 = 0
  - 나머지가 0은 짝수, 1은 홀수 처럼 구분할 때 사용한다.

  - X % 5 = 0 ~ 4 사이의 값만 반환
  - 어떠한 값이 들어와도 5를 넘기면 안될 때

- 거듭제곱은 곱하기 두번 연달아서 사용한다.

- 연산자 우선순위는 실제 수학과 같다.

## 비교 연산자, 조건문 // compare_operator.js 참고

### 비교 연산자

- **비교 연산자는 boolean을 반환한다.**

- 비교 연산자로 나온 값을 조건문에 이용한다.

### 조건문 (if, else if, else / switch)

#### if, else if, else

- if의 괄호 안은 무조건 boolean을 반환한 뒤 판단된다.

#### switch

- case가 다양할 경우, 간결하게 작성할 수 있다.

- case 조건 하나가 충족되면, 뒤에도 전부 출력되므로 모든 case마다 break 해주어야 한다.

## 논리 연산자 // logic_operator.js 참고

- **|| (OR)**

  - 여러 개 중 하나라도 true면 true
  - 즉, 모든 값이 false일 때만 false를 반환

- **&& (AND)**

  - 모든 값이 true면 true
  - 즉, 하나라도 false면 false 반환

- **! (NOT)**

  - true면 false
  - false면 true
  - 반대값으로 바꿔준다.

- **OR는 첫번째 true를 발견하는 즉시 평가를 멈춘다.**

- **AND는 첫번째 false를 발견하는 즉시 평가를 멈춘다.**

- 첫 번째 평가에서 빠르게 걸러낼수록 성능이 향상된다.

- **우선순위**는 AND가 OR 보다 높다.

## 반복문 (for, while, do while) // loop.js 참고

- for문의 괄호는 순서대로 **for(초기값; 조건; 반복문 한번 실행 후 작업)** 으로 이루어진다.

- **do while** 문은 코드를 실행하고 조건을 체크하므로 **적어도 한번은 실행**된다.

### break : 멈추고 빠져나온다.

- 무한 반복문은 특정 지점에서 break해서 빠져나오는 것이 중요하다.

### continue : 멈추고 다음 반복으로 진행한다.

- 명확한 횟수가 정해져 있으면 for문, 아니면 while문

- **반복문은 코드를 줄이기 위한 핵심적인 방법이다.**

## 함수 // function_basic.js 참고

- 같은 동작을 똑같이 여러 번 수행할 때, 한번 만들어놓고 재사용하는 것이 용이하다. (중복 제거 및 유지보수에 용이함)

```javascript
function /*함수*/ sayHello /*함수명*/(name) /*매개변수 or 인수*/ {
  // 매개변수는 여러개 입력 가능(name1, name2, name3)
  // 매개변수와 인수는 완전히 동일한 의미는 아니다.
  console.log(`Hello, ${name}`);
}
// 함수명 뒤에 괄호를 붙여서 호출할 수 있다.
// 매개변수가 필요하다면 괄호 안에 넣어준다.
sayHello("Mike");
```

- **어디서나 접근 가능한 변수**를 **전역 변수(global varable)**라 한다.

- **함수 내부에 선언된 변수**는 **지역 변수(local varable)**이다. (함수 내부에서만 사용 가능하다.)

- 전역 변수와 지역 변수는 서로 동일한 이름으로 선언할 수 있고 서로 간섭받지 않는다.

- **매개변수로 받은 값은 복사된 후, 함수에 지역변수가 된다.**

- 전체 서비스에서 공통으로 바라봐야 하는 변수를 제외하고는 **지역 변수를 쓰는 습관을 들이는 것이 좋다.** (전역 변수가 많아지면 관리가 힘들어진다.)

- return이 없는 함수 or return만 있는 함수는 undefined를 반환한다.

- return 오른쪽에 있는 값을 반환하고 즉시 함수를 종료하기 때문에 함수 종료 목적으로 사용하기도 한다.

  - **몇 가지 팁**

  - 한 번에 한 작업만 수행한다. (여러 작업을 한다면 더 잘게 나눠서 함수 작성)
  - 읽기 쉽고 어떤 동작인지 알 수 있게 네이밍한다.
    - showError // 에러를 보여줌
    - getName // 이름을 얻어옴
    - createUserData // 유저 데이터 생성
    - checkLogin // 로그인 여부 체크

### 함수 선언문

```javascript
function sayHello() {
  console.log("Hello");
}
sayHello();
```

- 어디서든 호출 가능 (호출을 선언문 위에 올려도 동작함)

- js는 위에서부터 한 줄씩 코드를 읽으면서 실행하는데, 이렇게 순차적으로 실행되고 즉시 결과를 반환하는 프로그래밍 언어를 **인터프리터 언어(Interpreted language)** 라 한다.

- **그렇다면 왜 호출을 선언문 위에 올려도 동작하는가?**

  - js는 실행 전 코드의 모든 함수 선언문을 찾아 생성해놓는다.

  - 눈에 보이는 건 아래에 있지만, 실제 함수를 사용할 수 있는 범위는 위로 올라가게 되는 것이다. 이를 **호이스팅(hoisting)** 이라 한다.
    (코드 위치가 실제로 올라간다는 것은 아니다)

### 함수 표현식

```javascript
let sayHello = function () {
  console.log("Hello");
};
sayHello();
```

- 함수 선언문과는 다르게, 함수 표현식은 코드에 도달하면 생성된다. 그렇기 때문에 호출은 무조건 표현식보다 뒤에 있어야 실행된다.

### 화살표 함수

```javascript
let add = (num1, num2) => {(
  num1 + num2;
)};
```

- function이 없어지고 화살표로 작성

- return이 없어지고 소괄호로 작성 가능

- return문이 한 줄이라면 괄호도 생략 가능

- 인수가 하나라면 인수쪽 괄호 생략 가능

- 인수가 없는 함수라면 괄호 생략 불가능

- return문이 존재한다 해도, 이전 코드가 여러줄 있을 경우는 소괄호를 사용할 수 없다.

## 객체 (object) // object.js 참고

```javascript
// 객체 생성
const superman = {
  name: "clark",
  age: 33,
};

// 접근
superman.name; // 'clark'
superman["age"]; // 33

// 추가
superman.gender = "male";
superman["hairColor"] = "black";

// 삭제
delete superman.hairColor;
```

- 객체는 중괄호로 작성하고, 키와 값(key, value)으로 구성된 프로퍼티가 들어간다. 각 프로퍼티는 쉼표로 구분한다.

```javascript
// 단축 프로퍼티
const name = "clark";
const age = 33;

const superman = {
  name, // name : name
  age, // age : age
  gender: "male",
};

// in 연산자
"birthDay" in superman; // false
"age" in superman; //true

// for ... in 반복문
for (let key in superman) {
  console.log(key);
  console.log(spuerman[key]);
}
```

- 존재하지 않는 프로퍼티에 접근한다면 undefined가 나온다.

- in 연산자를 사용하면 프로퍼티를 확인할 수 있다. (어떤 값이 넘어올 지 확신할 수 없을 때 사용한다)

- for ... in 반복문을 사용하면 객체를 순회하면서 값을 얻어올 수 있다.

## 객체의 메소드(method) & this // method.js 참고

```javascript
const superman = {
  name: "clark",
  age: 33,
  // fly 함수가 superman 객체의 메소드이다!
  // fly() 로 줄여서 작성할 수 있다 (function 키워드 생략 가능)
  fly: function () {
    console.log("날아갑니다");
  },
};

superman.fly(); // 날아갑니다
```

- **메소드 : 객체 프로퍼티로 할당된 함수**

- **객체와 메소드의 관계**

```javascript
const user = {
  name: "Mike",
  sayHello: function () {
    // 이 방식은 문제가 발생할 수 있다!
    // user 대신에 this를 사용해야 한다!
    console.log(`Hello, I'm ${user.name}`);
  },
};

// 여기의 user가 sayHello의 this가 된다!
user.sayHello();
```

- **this는 실행하는 시점, 즉 런타임에 결정된다.**

- **메소드를 화살표 함수로 선언하면 동작이 전혀 달라진다.**

  - 화살표 함수는 일반 함수와는 달리 **자신만의 this를 가지지 않는다.**

  - 화살표 함수 내부에서 this를 사용하면, 그 **this는 외부에서 값을 가져온다.**

  - **객체의 메소드를 작성할 때는 화살표 함수를 쓰지 않는 것이 좋다.**

```javascript
let boy = {
  name: "Mike",
  sayHello: () => {
    console.log(this); // 전역 객체를 가리킨다
  },
};
// this != boy
boy.sayHello();
```

- 브라우저 환경 전역 객체 : window

- Node.js 전역 객체 : global

## 배열 (array) // array.js 참고

- 순서가 있는 리스트(list)

- **배열을 탐색할 때는 고유 번호를 사용한다. 이를 인덱스(index)라 한다. 인덱스는 0부터 시작한다.**

```javascript
let students = ["철수", "영희", "영수"];

console.log(students[0]); // 철수
console.log(students[1]); // 영희
console.log(students[2]); // 영수

// 수정
students[0] = "민정";

console.log(students[0]); // 민정

// 배열의 길이
students.length;

// push() : 배열 끝에 추가
students.push("기영");
console.log(students); // ["민정", "영희", "영수", "기영"]

//pop() : 배열 끝 요소 제거
students.pop();
console.log(students); // ["민정", "영희", "영수"]

// unshift() : 배열 앞에 추가
students.unshift("철수");
console.log(students); // ["철수", "민정", "영희", "영수"]

// shift() : 배열 앞에 제거
students.shift();
console.log(students); // ["민정", "영희", "영수"]
```

- 배열의 특징

  - 문자 뿐만 아니라 숫자, 객체, 함수 등도 포함할 수 있다.

  ```javascript
  // 예제
  let arr = [
    "민수", // string
    3, // number
    false, // boolean
    {
      // object
      name: "Mike",
      age: 30,
    },
    // function
    function () {
      console.log("TEST");
    },
  ];
  ```

- length : 배열의 길이(배열이 가지고 있는 요소의 갯수를 반환)

- 배열의 메소드

  - push() : 배열 맨 뒤에 요소를 추가해 주는 메소드

  - pop() : 배열 맨 뒤 요소를 제거해 주는 메소드

  - unshift() : 배열 맨 앞에 요소를 추가하는 메소드

  - shift() : 배열 맨 앞에 요소를 제거하는 메소드

- push와 unshift는 여러 요소를 한번에 추가할 수도 있다.

- 배열을 사용하는 이유 중 하나는 반복을 위해서이다.

  - length를 이용하여 배열의 길이를 알고 있으므로, for문을 사용할 수 있다.

  - for ... of문은 for문보다는 간단하지만 인덱스를 못 얻는다는 단점이 있다.

  ```javascript
  // for문
  let days = ["월", "화", "수"];
  for (let index = 0; index < days.length; index++) {
    console.log(days[index]);
  }

  // for ... of
  let days = ["월", "화", "수"];
  // 배열 days를 돌면서 요소를 day라는 이름으로 접근할 수 있다.
  for (let day of days) {
    console.log(day);
  }
  ```
