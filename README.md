# MobX 연습 1 \_ 카운터 만들기

> CounterStore에 변화될 값 (count) , Action (1씩증가 / 1씩감소) 를 설정해주고 CounterComponent컴포넌트로 가져와 '+'버튼을 누르면 +1, '-'버튼을 누르면 -1 되는 기능구현
<br>

## `observable` `action` `makeObservable` `inject` `observer` `Provider` 활용

- `observable` : 변화가 감지되어야하는 값 (react에서 state개념)들을 객체로 관리
- `action` : 상태의 변화를 일으키는 함수 -`makeObservable` : ES6부터 도입된 기능으로, store컴포넌트에 아래와 같이 constructor을 생성해 주어야 state를 사용하는 컴포넌트에서 변화를 감지한다.

```js
constructor() {
    makeObservable(this); //이부분을 꼭!! 생성해주어야 함
  }
```

- `inject` : Next.js는 여러 스토어를 사용할 수 있다. inject로 컴포넌트 마다 어떤 스토어를 주입할 것인지 정할 수 있음

- `observer` : state 를 사용할 컴포넌트가 변화를 주시하고 있다는 것을 표시

- `Provider` : 최상위 태그인 index.js에 사용하여 하위 모든 컴포넌트에서 state를 가져와 사용할 수 있도록 해줌.
  ⭐️ value에 어떤 스토어를 사용하는지 작성해주어야함
  ```js
  <Provider value={CounterStore}>
  ```
