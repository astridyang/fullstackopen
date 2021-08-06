import React, { Component } from "react";
import {Route, Switch, Redirect} from 'react-router-dom'
import MyNavLink from '../../components/MyNavLink'
import Message from './Message'
import News from './News'
export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>This is Home</h2>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <MyNavLink to="/home/news">News</MyNavLink>
          </li>
          <li className="nav-item">
            <MyNavLink to="/home/message">Message</MyNavLink>
          </li>
        </ul>
        <div>
          <Switch>
            <Route path="/home/news" component={News} />
            <Route path="/home/message" component={Message} />
            <Redirect to="/home/news" />
          </Switch>
        </div>
      </div>
    );
  }
}
