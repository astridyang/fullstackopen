import React, { Component } from "react";

export default class Demo extends Component {
  state = {
    count: 0,
  };
  /**
   * 对象式setState
   * 函数式setState
   * 使用原则：
   * （1）新状态不依赖原状态====》使用对象方式
   * （2）新状态依赖原状态====》使用函数式
   *
   */
  increment = () => {
    // this.setState((state) => ({ count: state.count + 1 }));
    let { count } = this.state;
    this.setState(
      {
        count: count + 1,
      },
      () => {
        console.log("current count: ", this.state.count);
      }
    );
  };
  render() {
    return (
      <div>
        <h3>current count: {this.state.count}</h3>
        <button onClick={this.increment}>+1</button>
      </div>
    );
  }
}
