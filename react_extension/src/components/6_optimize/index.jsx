import React, { Component, PureComponent } from "react";

// 对状态做先对比再决定要不要重新渲染
export default class Parent extends PureComponent {
  state = { carName: "benz" };
  changeCar = () => {
    this.setState({});
  };
  render() {
    let { carName } = this.state;
    console.log("parent---render");
    return (
      <div>
        <h2>parent Component</h2>
        <p>my car: {carName}</p>
        <p>
          <button onClick={this.changeCar}>change car</button>
        </p>
        <Child render={(name)=><C name={name}/>} /> 
      </div>
    );
  }
}
class Child extends Component {
  state = {hero:'tamamo'}
  render() {
    console.log("child---render");
    return (
      <div>
        <h2>child Component</h2>
        {/*  类似vue的slot */}
        {this.props.render(this.state.hero)}
      </div>
    );
  }
}
class C extends Component {
  render() {
    console.log("C---render");
    return (
      <div>
        <h2>C Component</h2>
        <p>{this.props.name}</p>
      </div>
    );
  }
}