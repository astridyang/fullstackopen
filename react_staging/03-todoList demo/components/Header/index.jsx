import React, { Component } from "react";
import { nanoid } from "nanoid";
import PropTypes from 'prop-types'
import "./index.css";
export default class Header extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }
  // add todo
  add = (event) => {
    let { keyCode, target } = event;
    if (keyCode !== 13) {
      return;
    }
    if (target.value.trim() === "") {
      alert("input can't be empty");
      return;
    }
    let newTodo = { id: nanoid(), text: target.value, done: false };
    this.props.addTodo(newTodo);
    target.value = ''
  };
  render() {
    return (
      <div className="todo_header">
        <input
          onKeyUp={this.add}
          type="text"
          placeholder="input todo, and press enter to add"
          className="todo-input"
        />
      </div>
    );
  }
}
