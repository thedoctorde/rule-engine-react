import React, {Component} from 'react';
import EventRuleset from "./EventRuleset";
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  marginLeft: 12,
};

class EventForm extends Component {
  render() {
    const {event, ruleset, createRule, uploadEvents, store} = this.props;
    return (
      <div>
        id: {event.id}
        name: {event.name}

        <h1>Rules</h1>
        <EventRuleset ruleset={ruleset} eventId={event.id}/>
        <RaisedButton label="Add new rule"
                      onClick={() => createRule(event.id)}/>
        <RaisedButton label="Save" style={style}
                      onClick={() => {
                        uploadEvents(event.id, store)
                      }}/>
      </div>

    );
  }
}

export default EventForm;
