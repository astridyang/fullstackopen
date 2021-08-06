import React, { Component } from "react";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import "./App.css";
export default class App extends Component {
  state = {
    todoList: [
      {
        id: 1,
        text: "studying",
        done: true,
      },
      {
        id: 2,
        text: "shopping",
        done: false,
      },
    ],
  };
  // add todo
  addTodo = (todoObj) => {
    let { todoList } = this.state;
    this.setState({
      todoList: [todoObj, ...todoList],
    });
  };
  // update todo's done
  updateTodo = (id, done) => {
    let { todoList } = this.state;
    let newList = todoList.map((item) => {
      if (item.id === id) {
        return { ...item, done };
      } else {
        return item;
      }
    });
    this.setState({
      todoList: newList,
    });
  };
  deleteTodo = (id) => {
    let { todoList } = this.state;
    let newList = todoList.filter((item) => {
      return item.id !== id;
    });
    this.setState({
      todoList: newList,
    });
  };
  checkAllTodo = (done) =>{
    console.log(done)
    let { todoList } = this.state;
    let newList = todoList.map((item) => {
      return {...item, done}
    });
    this.setState({
      todoList: newList,
    });
  }
  clearAllDone = () => {
    let { todoList } = this.state;
    let newList = todoList.filter((item) => {
      return !item.done
    });
    this.setState({
      todoList: newList,
    });
  };
  render() {
    let { todoList } = this.state;
    return (
      <div className="todo-app">
        <Header addTodo={this.addTodo} />
        <List
          todoList={todoList}
          updateTodo={this.updateTodo}
          deleteTodo={this.deleteTodo}
        />
        <Footer todoList={todoList} checkAllTodo={this.checkAllTodo}
          clearAllDone={this.clearAllDone} />
      </div>
    );
  }
}
