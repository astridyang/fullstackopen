import React, { Component } from "react";
// import qs from "query-string";
const DetailData = [
  { id: "01", content: "react" },
  { id: "02", content: "vue" },
  { id: "03", content: "angular" },
];
export default class Detail extends Component {
  render() {
    console.log(this.props);
    // const { id, title } = this.props.match.params;
    // let { search } = this.props.location;
    // let { id, title } = qs.parse(search.slice(1));
    let {id, title} = this.props.location.state || {}
    let findResult = DetailData.find((item) => {
      return item.id === id;
    }) || {};
    return (
      <div>
        <ul>
          <li>ID: {id}</li>
          <li>Title: {title}</li>
          <li>Content: {findResult.content}</li>
        </ul>
      </div>
    );
  }
}
