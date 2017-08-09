import React, {Component} from 'react';
import EventRuleset from './EventRuleset'

class EventForm extends Component {
  render() {
    const {event} = this.props;
    return (
      <div>
        id: {event.id}
        name: {event.name}
        {event.rulesets.map(item =>
          <EventRuleset ruleset={item} key={item.id}/>
        )}
      </div>

    );
  }
}

export default EventForm;
