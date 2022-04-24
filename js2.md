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

- 어떠한 함수라도 new를 붙여 실행하는 순간 저 알고리즘으로 동작하게 된다.

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

## 객체 메소드, 계산된 프로퍼티

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
