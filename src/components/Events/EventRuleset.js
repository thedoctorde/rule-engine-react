import React from 'react';
import Rule from "./Rule";

const EventRuleset = ({ruleset}) => {
  return (
    <div>
      {ruleset.rules.map(item => <Rule rule={item} key={item.id}/>)}
    </div>
  )
};

export default EventRuleset;
