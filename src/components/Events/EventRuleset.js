import React from 'react';
import Rule from "./Rule";

const EventRuleset = ({ruleset, eventId}) => {
  return (
    <div>
      {ruleset.map(item => <Rule rule={item} eventId={eventId} key={item.id}/>)}
    </div>
  )
};

export default EventRuleset;
