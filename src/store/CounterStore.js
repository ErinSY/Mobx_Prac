import { observable, action, makeObservable } from 'mobx';
// makeObservable 이 없으면 state를 사용하는 컴포넌트에서 변화를 감지하지 못한다
// 그리고 아래처럼 constructot을 생성해야함 (ES6부터 사용하는 기능)
class CounterStore {
  constructor() {
    makeObservable(this); //이부분을 꼭!! 생성해주어야 함
  }
  @observable
  count = 5;

  get count() {
    // get 메서드 : 사용자가 속성값을 꺼내서 사용하고 싶을때 실행
    return this.count;
  }

  @action // state를 바꿔주는 action 추가
  increament() {
    this.count++;
    console.log(this.count);
  }

  @action
  decrement() {
    this.count--;
    console.log(this.count);
  }
}
// 위의 데이터를 컴포넌트에서 state로 활용할 수 있는지 보려면 export 할때 new 를 붙여준다
export default new CounterStore();
