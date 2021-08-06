import React, { Component } from "react";
const MyContext = React.createContext();
// 一般不用，用react-redux
const { Provider, Consumer } = MyContext;
export default class A extends Component {
  state = { username: "tom", age: 19 };
  render() {
    let { username, age } = this.state;
    return (
      <div>
        <h2>A组件</h2>
        <p>username：Tom</p>
        <Provider value={{ username, age }}>
          <B />
        </Provider>
      </div>
    );
  }
}
class B extends Component {
  render() {
    return (
      <div>
        <h3>B组件</h3>
        <p>从A组件接收到的name：</p>
        <C />
      </div>
    );
  }
}
// class C extends Component {
//   // 声明要接受的context
//   static contextType = MyContext
//   render() {
//     const { username, age } = this.context; //只能在类式组件用
//     return (
//       <div>
//         <h4>C组件</h4>
//         <p>从A组件接收到的name：{username}, age: {age}</p>
//       </div>
//     );
//   }
// }
function C() {
  return (
    <div>
      <h4>函数式C组件</h4>
      <p>
        从A组件接收到的name：
        // 函数式、类式组件都能用
        <Consumer>
          {(value) => {
            let {username, age} = value
            return `${username}, age: ${age}`;
          }}
        </Consumer>
      </p>
    </div>
  );
}
