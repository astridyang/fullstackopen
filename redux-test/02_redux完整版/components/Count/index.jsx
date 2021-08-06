import React, { Component } from "react";
import store from "../../redux/store";
import {
  countIncrementAction,
  countDecrementAction,
} from "../../redux/countAction";
export default class Count extends Component {
  increment = () => {
    let { value } = this.selectNumber;
    store.dispatch(countIncrementAction(value * 1));
  };
  decrement = () => {
    let { value } = this.selectNumber;
    store.dispatch(countDecrementAction(value * 1));
  };
  incrementIfOdd = () => {
    let { value } = this.selectNumber;
    let count = store.getState();
    if (count % 2 === 1) {
      store.dispatch(countIncrementAction(value * 1));
    }
  };
  incrementAsync = () => {
    setTimeout(() => {
      let { value } = this.selectNumber;
      store.dispatch(countIncrementAction(value * 1));
    }, 500);
  };
  render() {
    return (
      <div>
        <h2>current count {store.getState()}</h2>
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
