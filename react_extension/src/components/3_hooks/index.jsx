import React, { useState, useEffect, createRef,useRef } from "react";
import ReactDOM from "react-dom";
// class Demo extends React.Component {
//   state = {
//     count: 0,
//   };
//   myRef = createRef();
//   componentDidMount() {
//     this.timer = setInterval(() => {
//       this.setState({ count: this.state.count + 1 });
//     }, 1000);
//   }
//   unMount = () => {
//     ReactDOM.unmountComponentAtNode(document.getElementById("root"));
//   };
//   componentWillUnmount() {
//     clearInterval(this.timer);
//   }
//   show = ()=>{
//     console.log(this.myRef.current.value)
//   }
//   render() {
//     return (
//       <div>
//         <h2>current count is {this.state.count}</h2>
//         <input type="text" ref={this.myRef} />
//         <button onClick={this.unMount}>unmout all component</button>
//         <button onClick={this.show}>show input value</button>
//       </div>
//     );
//   }
// }
function Demo() {
  const [count, setCount] = useState(0);
  const myRef = useRef() //存储/查找组件内的标签或其他任意数据 和 createRef用法一样
  function add() {
    // setCount(count + 1);
    setCount((count) => count + 1);
  }
  function unMount() {
    ReactDOM.unmountComponentAtNode(document.getElementById("root"));
  }
  // componentDidMount时调用一次
  useEffect(() => {
    let timer = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    return () => {
      clearInterval(timer); // useEffect返回的函数在componentWillUnmount时调用
    };
  }, []);//数组内为要监听的变量，[]表示什么也不监听，不传表示每次 componentDidUpdate时都调用
  function show(){
    console.log(myRef.current.value)
  }
  return (
    <div>
      <h2>function component</h2>
      <h2>current count {count}</h2>
      <button onClick={add}>+1</button>
      <button onClick={unMount}>unmout all component</button>
      <p>
        <input type="text" ref={myRef} />
        <button onClick={show}>show input value</button>
      </p>
    </div>
  );
}

export default Demo;
