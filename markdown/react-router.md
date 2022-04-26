## React

- react-router : react에서 브라우저 라우팅을 관리하기 위해 사용하는 라이브러리이다.

### react-router v6 변경점

- 기존의 route들을 구성하는 부모 요소를 switch라는 네이밍으로 사용하였는데 route의 복수개를 뜻하는 **routes로 이름이 변경되었다.**

- **exact 옵션 삭제**

  - 기존의 / 라우트의 경우 React Router의 디폴트 매칭 규칙 으로 인해 앞부분만 일치해도 전부 매칭되기 때문에 정확히 라우트를 일치시키고자 exact 속성을 사용하였으나 v6부터 기본적으로 정확히 일치하도록 매칭 규칙이 변하여 v6에서부터는 exact 의 옵션을 더이상 사용하지 않습니다. 만약 하위경로에 여러 라우팅을 매칭시키고 싶다면 다음과 같이 URL 뒤에 \* 을 사용하여 일치시킬 수 있습니다.

  ```javascript
  <Route path='categories/*' />
  ```

- **route에서 컴포넌트 렌더링**

  - 이전 버전에서는 컴포넌트를 렌더링 하기 위해선 Route 컴포넌트의 render 속성에 arrowFunction 을 사용하여 컴포넌트를 렌더링 하는 방식으로 사용하였습니다.

  - v6에서는 element 속성을 통해 바로 넣어줄 수 있도록 개선되었습니다.

```javascript
import UserInfo from './UserInfo';

// v5 버전 사용 예시
<Route path='user' component={UserInfo} />
<Route
path='user'
render={routeProps => (
    <UserInfo routeProps={routeProps} isLogin={true} />
)}
/>

// v6 버전 사용 예시
<Route path='user' element={<UserInfo />} />
<Route path='user' element={<UserInfo isLogin={true} />} />
```

- **중첩 라우팅 (v6)**

```javascript
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='user' element={<User />}>
          <Route path='detail' element={<UserDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function User() {
  return (
    <>
      <Outlet />
    </>
  );
}
```

- **useHistory 훅 변경 -> useNavigate**

```javascript
// v5
const history = useHistory();

history.push('/home');
history.replace('/home');

// v6
const navigate = useNavigate();

navigate('/home');
navigate('/home', {replace: true});

// v6 에서의 앞으로, 뒤로 가기 사용방법 변화
<button onClick={() => navigate(-2)}>Go 2 pages back</button>
<button onClick={() => navigate(-1)}>Go back</button>
<button onClick={() => navigate(1)}>Go forward</button>
<button onClick={() => navigate(2)}>Go 2 pages forward</button>
```
