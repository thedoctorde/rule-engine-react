import React, { Component } from 'react';

class HelpPage extends Component {
  render() {
    return (
      <div style={{marginLeft: "20px"}}>
        {window.helpPage.map(item => {
          return(
            <section>
              <h2>{item.category}</h2>
              {item.links.map(obj => {
                return(
                  <div>
                    <a href={obj.link}>{obj.name}</a>
                  </div>
                )
              })}
            </section>
          )
        })}

      </div>
    );
  }
}

export default HelpPage;