import React, { Component } from "react";
import "./index.css";
export default class Footer extends Component {
  handleChange = (event) => {
    this.props.checkAllTodo(event.target.checked);
  };
  handleClearAllDone = ()=>{
    this.props.clearAllDone()
  }
  render() {
    let { todoList } = this.props;
    let doneCount = todoList.reduce((prev, item) => {
      return prev + (item.done ? 1 : 0);
    }, 0);
    let total = todoList.length;
    return (
      <div className="todo-footer">
        <div className="left">
          <input
            type="checkbox"
            onChange={this.handleChange}
            checked={doneCount === total && total !== 0 ? true : false}
          />
          <span>done{doneCount}</span> / <span>total{total}</span>
        </div>
        <button onClick={this.handleClearAllDone}>clear all done</button>
      </div>
    );
  }
}
