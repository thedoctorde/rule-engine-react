import React, { Component } from 'react';
import EventTablePage from "./Events/EventTablePage";
import ManageEventPage from "./Events/ManageEventPage";
import {
  Route,
} from 'react-router-dom'

class Layout extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={EventTablePage}/>
        <Route path="/ruleset/:id" component={ManageEventPage}/>
      </div>
    );
  }
}

export default Layout;