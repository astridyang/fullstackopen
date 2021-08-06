import React, { Component } from "react";
import { withRouter } from "react-router-dom";
class Header extends Component {
  goBack = () => {
    this.props.history.goBack();
  };
  goForward = () => {
    this.props.history.goForward();
  };
  go = () => {
    this.props.history.go(-2);
  };
  render() {
    return (
      <div>
        <h2>Header</h2>
        <p>
          <button
            type="button"
            className="btn btn-light"
            onClick={this.goBack}
          >
            goback
          </button>
          &nbsp;&nbsp;
          <button
            type="button"
            className="btn btn-light"
            onClick={this.goForward}
          >
            goforward
          </button>
          &nbsp;&nbsp;
          <button type="button" className="btn btn-light" onClick={this.go}>
            go
          </button>
        </p>
        <hr />
      </div>
    );
  }
}
export default withRouter(Header);
