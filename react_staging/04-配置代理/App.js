import React, { Component } from "react";
import axios from 'axios'   
import "./App.css";
export default class App extends Component {
  getStudentList = ()=>{
    axios.get('/api1/students').then((res)=>{
      console.log('response data: ', res.data)
    })
  }
  getCarList = ()=>{
    axios.get('/api2/cars').then((res)=>{
      console.log('response data: ', res.data)
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.getStudentList}>getStudentList</button>
        <button onClick={this.getCarList}>getCarList</button>
      </div>
    );
  }
}
