import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Layout from './components/Layout';
import {
  BrowserRouter as Router,
} from 'react-router-dom'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider>
          <Layout />
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
