import React, { Component } from "react";
import PropTypes from "prop-types";
import Item from "../Item";
import "./index.css";
export default class List extends Component {
  static propTypes = {
    todoList: PropTypes.array.isRequired,
    updateTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
  };
  render() {
    const { todoList, updateTodo, deleteTodo } = this.props;
    return (
      <div className="todo-list">
        {todoList.map((item) => (
          <Item
            key={item.id}
            {...item}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    );
  }
}
