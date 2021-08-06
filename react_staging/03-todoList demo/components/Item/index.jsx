import React, { Component } from "react";
import "./index.css";
export default class Item extends Component {
  state = {
    mouse: false
  }
  handleMouse = (flag)=>{
    return ()=>{
      this.setState({
        mouse:flag
      })
    }
  }
  handleChange = (id) =>{
    return (event)=>{
      this.props.updateTodo(id, event.target.checked)
    }
  }
  handleDelete = (id)=>{
    if(window.confirm("Are your sure?")){
      this.props.deleteTodo(id)
    }
  }
  render() {
    let {id, text, done } = this.props;
    let {mouse} = this.state
    return (
      <li style={{background:mouse?"#ddd":"white"}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label>
          <input type="checkbox" checked={done} onChange={this.handleChange(id)} />
          <span>{text}</span>
        </label>
        <button className="dangerous" styl
        e={{display:mouse?"block":'none'}} onClick={()=>this.handleDelete(id)}>delete</button>
      </li>
    );
  }
}
