import React, { Component } from "react";

// 用于连接UI组件与redux
import { connect } from "react-redux";
import {
  increment,
  decrement,
  incrementAsync,
} from "../../redux/actions/count";

class Count extends Component {
  increment = () => {
    let { value } = this.selectNumber;
    this.props.increment(value * 1);
  };
  decrement = () => {
    let { value } = this.selectNumber;
    this.props.decrement(value * 1);
  };
  incrementIfOdd = () => {
    let { value } = this.selectNumber;
    if (this.props.count % 2 === 1) {
      this.props.increment(value * 1);
    }
  };
  incrementAsync = () => {
    let { value } = this.selectNumber;
    this.props.incrementAsync(value * 1, 500);
  };
  render() {
    return (
      <div>
        <h2>Count component</h2>
        <h3>current person count is: {this.props.personCount}</h3>
        <h4>current count {this.props.count}</h4>
        <div>
          <select ref={(c) => (this.selectNumber = c)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <button onClick={this.increment}>+</button>
          <button onClick={this.decrement}>-</button>
          <button onClick={this.incrementIfOdd}>incrementIfOdd</button>
          <button onClick={this.incrementAsync}>incrementAsync</button>
        </div>
      </div>
    );
  }
}
// 返回的对象作为props传给UI组件 mapStateToProp
// 返回的对象作为操作状态的方法传给UI组件 mapDispatchToProp
export default connect(
  (state) => ({ personCount: state.persons.length, count: state.count }),
  {
    increment,
    decrement,
    incrementAsync,
  }
)(Count);
