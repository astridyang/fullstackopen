import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Detail from "./Detail";
import './index.css'
export default class Message extends Component {
  state = {
    messages: [
      { id: "01", title: "message01" },
      { id: "02", title: "message02" },
      { id: "03", title: "message03" },
    ],
  };
  pushView = (id,title)=>{
    this.props.history.push('/home/message/detail', {id, title})
  }
  replaceView = (id, title)=>{
    this.props.history.replace('/home/message/detail', {id, title})
  }
  render() {
    let { messages } = this.state;
    return (
      <div>
        <ul className="message-list">
          {messages.map((item) => {
            return (
              <li key={item.id}>
                {/* <Link to={`/home/message/${item.id}/${item.title}`}>
                  {item.title}
                </Link> */}
                {/* <Link to={`/home/message?id=${item.id}&title=${item.title}`}>
                  {item.title}
                </Link> */}
                <Link
                  // replace
                  to={{
                    pathname: "/home/message",
                    state: { id: item.id, title: item.title },
                  }}
                >
                  {item.title}
                </Link>&nbsp;&nbsp;
                <button  type="button" className="btn btn-primary" onClick={()=>this.pushView(item.id, item.title)}>push查看</button>&nbsp;&nbsp;
                <button  type="button" className="btn btn-primary" onClick={()=>this.replaceView(item.id, item.title)}>replace查看</button>
              </li>
            );
          })}
        </ul>
        <hr />
        <div>
          {/* <Route component={Detail} path="/home/message/:id/:title" /> */}
          <Route component={Detail} path="/home/message" />
        </div>
      </div>
    );
  }
}
