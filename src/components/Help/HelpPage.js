import React, { Component } from 'react';

class HelpPage extends Component {
  render() {
    return (
      <div style={{marginLeft: "20px"}}>
        <section>
          <h2>Rule Types</h2>
          {window.ruleTypes.map(item => {
            return(
              <div>
                <a href={window.helpPage["rules"]["links"][item.id].link}>{window.helpPage["rules"]["links"][item.id].name}</a>
              </div>
            )
          })}

        </section>
        <section>
          <h2>Params</h2>
          {/*{window.ruleTypes.map(item => {*/}
            {/*return(*/}
              {/*<div>*/}
                {/*<a href={window.helpPage["rules"]["links"][item.id].link}>{window.helpPage["rules"]["links"][item.id].name}</a>*/}
              {/*</div>*/}
            {/*)*/}
          {/*})}*/}
        </section>

      </div>
    );
  }
}

export default HelpPage;