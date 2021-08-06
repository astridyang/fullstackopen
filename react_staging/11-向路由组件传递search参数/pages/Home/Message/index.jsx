import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Detail from "./Detail";
export default class Message extends Component {
  state = {
    messages: [
      { id: "01", title: "message01" },
      { id: "02", title: "message02" },
      { id: "03", title: "message03" },
    ],
  };
  render() {
    let { messages } = this.state;
    return (
      <div>
        <h2>Message</h2>
        <ul>
          {messages.map((item) => {
            return (
              <li key={item.id}>
                {/* <Link to={`/home/message/${item.id}/${item.title}`}>
                  {item.title}
                </Link> */}
                <Link to={`/home/message?id=${item.id}&title=${item.title}`}>
                  {item.title}
                </Link>
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
