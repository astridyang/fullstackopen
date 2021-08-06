import React, { Component, Fragment } from "react";

export default class Demo extends Component {
  render() {
    return (
      // 可以传key属性
      <Fragment>
        <input type="text" />
      </Fragment>
      // 不能有任何属性
      // <>
      //   test empty tag
      // </>
    );
  }
}
