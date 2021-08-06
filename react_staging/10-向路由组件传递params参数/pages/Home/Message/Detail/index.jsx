import React, { Component } from "react";

const DetailData = [
  { id: "01", content: "react" },
  { id: "02", content: "vue" },
  { id: "03", content: "angular" },
];
export default class Detail extends Component {
  render() {
    console.log(this.props)
    const { id, title } = this.props.match.params;
    let currentMsg = DetailData.find((item) => {
      return item.id === id;
    });
    return (
      <div>
        <ul>
          <li>ID: {id}</li>
          <li>Title: {title}</li>
          <li>Content: {currentMsg.content}</li>
        </ul>
      </div>
    );
  }
}
