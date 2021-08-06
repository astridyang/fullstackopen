import React, { Component, lazy, Suspense } from "react";
import { NavLink, Route } from "react-router-dom";
// import About from './About'
// import Home from './Home'
import Loading from "./Loading";
const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));

export default class Demo extends Component {
  render() {
    return (
      <div>
        <div className="sideBar">
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>
        <div className="main">
          <Suspense fallback={<Loading />}>
            <Route path="/home" component={Home}></Route>
            <Route path="/about" component={About}></Route>
          </Suspense>
        </div>
      </div>
    );
  }
}
