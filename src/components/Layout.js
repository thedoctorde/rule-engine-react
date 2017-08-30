import React, { Component } from 'react';
import RulesTablePage from "./Events/EventTablePage";
import ManageEventPage from "./Events/ManageEventPage";
import {
  Route,
} from 'react-router-dom'

class Layout extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={RulesTablePage}/>
        <Route path="/event/:id" component={ManageEventPage}/>
      </div>
    );
  }
}

export default Layout;