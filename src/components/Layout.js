import React, { Component } from 'react';
import EventTablePage from "./Events/EventTablePage";
import ManageEventPage from "./Events/ManageEventPage";
import { Route } from 'react-router-dom';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';

class Layout extends Component {
  render() {
    return (
      <div>
        <Toolbar>
          <ToolbarGroup firstChild={true} style={{paddingLeft: "22px"}}>
            {window.app_version}
          </ToolbarGroup>
        </Toolbar>
        <Route exact path="/" component={EventTablePage}/>
        <Route path="/ruleset/:id" component={ManageEventPage}/>
      </div>
    );
  }
}

export default Layout;