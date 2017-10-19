import React, { Component } from 'react';

class HelpPage extends Component {
  render() {
    return (
      <div style={{marginLeft: "20px"}}>
        <section>
          <h2>Rule Types</h2>
          <a href={window.urlForRules}>Link for rule types</a>
        </section>
        <section>
          <h2>Params</h2>
          <a href={window.urlForParams}>Link for params</a>
        </section>

      </div>
    );
  }
}

export default HelpPage;