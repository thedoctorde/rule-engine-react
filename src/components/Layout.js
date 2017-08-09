import React, { Component } from 'react';
import RulesTablePage from "./Events/EventTablePage";
import HomePage from "./Home/HomePage";
import ManageEventPage from "./Events/ManageEventPage";
import {
  Route,
  Link
} from 'react-router-dom'

class Layout extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/events">Events</Link></li>
        </ul>
        <hr/>
        <Route exact path="/" component={HomePage}/>
        <Route path="/events" component={RulesTablePage}/>
        <Route path="/event/:id" component={ManageEventPage}/>
      </div>
    );
  }
}

export default Layout;