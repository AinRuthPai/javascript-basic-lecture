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

### 조건문 (if, else if, else)

- if의 괄호 안은 무조건 boolean을 반환한 뒤 판단된다.

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

## switch문
