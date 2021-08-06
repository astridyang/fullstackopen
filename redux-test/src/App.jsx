import React, { Component } from "react";
import Count from "./container/Count"; // 容器组件
import Person from "./container/Person";
export default class App extends Component {
  render() {
    return (
      <div>
        <Count/>
        <Person />
      </div>
    );
  }
}
