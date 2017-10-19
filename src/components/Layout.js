import React, { Component } from 'react';
import EventTablePage from "./Events/EventTablePage";
import ManageEventPage from "./Events/ManageEventPage";
import { Route } from 'react-router-dom';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import HelpPage from "./Help/HelpPage";

class Layout extends Component {
  render() {
    return (
      <div>
        <Toolbar>
          <ToolbarGroup firstChild={true} style={{paddingLeft: "22px"}}>
            {window.app_version}
          </ToolbarGroup>
          <ToolbarGroup >
            {window.headerLinks.map(item =>
              <a href={item.url} style={{marginLeft: "22px"}}>{item.name}</a>)}
          </ToolbarGroup>
        </Toolbar>
        <Route exact path="/" component={EventTablePage}/>
        <Route path="/ruleset/:id" component={ManageEventPage}/>
        <Route path="/help" component={HelpPage}></Route>
      </div>
    );
  }
}

export default Layout;