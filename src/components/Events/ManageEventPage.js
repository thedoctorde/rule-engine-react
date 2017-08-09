import React, {Component} from 'react';
import {connect} from 'react-redux'
import EventForm from "./EventForm";

class ManageEventPage extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      event: Object.assign({}, props.event),
      errors: {}
    };
  }

  render() {
    return (
      <EventForm
        event={this.state.event}
      />
    );
  }
}


function getEventById(events, id) {
  const event = events.filter(event => event.id === id);
  if (event) return event[0]; //since filter returns an array, have to grab the first.
  return null;
}

// function getRulesetsByEventId(rulesets, eventId) {
//   const rulesets = events.filter(event => event.id === id);
//   if (event) return event[0]; //since filter returns an array, have to grab the first.
//   return null;
// }

function mapStateToProps(state, ownProps) {
  debugger;
  const eventId = ownProps.match.params.id; // from the path `/course/:id`

  let event = {id: '', name: ''};

  if (eventId && state.events.length > 0) {
    event = getEventById(state.events, eventId);
  }

  return {
    event: event
  };
}

export default connect(mapStateToProps)(ManageEventPage);