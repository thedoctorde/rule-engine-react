import React, {Component} from 'react';
import EventRuleset from "./EventRuleset";
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  marginLeft: 12,
};

class EventForm extends Component {
  render() {
    const {event, ruleset, createRule} = this.props;
    return (
      <div>
        id: {event.id}
        name: {event.name}
        <EventRuleset ruleset={ruleset}/>
        <RaisedButton label="Add new rule"
                      onClick={() => createRule(event.id) }/>
        <RaisedButton label="Save" style={style}/>
      </div>

    );
  }
}

export default EventForm;
