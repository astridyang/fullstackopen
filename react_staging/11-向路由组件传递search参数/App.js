import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import About from "./pages/About";
import Home from './pages/Home'
// import Test from "./pages/Test";
import MyNavLink from "./components/MyNavLink";
import "./App.css";
export default class App extends Component {
  render() {
    return (
      <div className="container">
        <h2>App</h2>
        <hr/>
        <div className="row">
          <div className="col-3">
            <nav className="nav nav-pills flex-column">
              <MyNavLink to="/home">Home</MyNavLink>
              <MyNavLink to="/about/a">About</MyNavLink>
              <MyNavLink to="/test/a">Test</MyNavLink>
            </nav>
          </div>
          <div className="col-9">
            <Switch>
              <Route path="/home" component={Home}></Route>
              <Route path="/about" component={About}></Route>

              {/* <Route path="/test" exact  component={Test}></Route> */}
              <Redirect to="/about" />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}
