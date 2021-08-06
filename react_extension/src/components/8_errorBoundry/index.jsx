import React, { Component } from "react";

export default class P extends Component {
  state = { hasError: "" };
  // 后代组件生命周期函数出错时调用
  static getDerivedStateFromError(error) {
    console.log("@@@", error);
    return { hasError: error };
  }
  componentDidCatch() {
    // 统计错误，反馈给服务器
    console.log("catch error");
  }
  render() {
    return (
      <div>
        <h2>parent</h2>
        {/* 只能在production环境使用 */}
        {this.state.hasError ? (
          <h3>network error, wait and try again.</h3>
        ) : (
          <C />
        )}
      </div>
    );
  }
}
class C extends Component {
  state = {
    users: "abc",
    // users: [
    //   {
    //     id: 1,
    //     name: "bb",
    //   },
    //   {
    //     id: 2,
    //     name: "tamamo",
    //   },
    // ],
  };
  render() {
    let { users } = this.state;
    return (
      <div>
        <h3>child</h3>
        <ul>
          {users.map((user) => {
            return <li key={user.id}>{user.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}
