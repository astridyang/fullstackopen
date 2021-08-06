import React, { Component } from "react";
import {Link, Route} from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import "./App.css";
export default class App extends Component {
 
  render() {
    return (
      <div>
        <div className="sideBar">
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
        </div>
        <div className="main">
          <Route path="/home" component={Home}></Route>
          <Route path="/about" component={About}></Route>
        </div>
      </div>
    );
  }
}
