import React, {Component} from 'react';
import {connect} from 'react-redux'
import EventForm from "./EventForm";
import toArray from "../../utils/helpers"
import {createRule} from "../../actions/eventActions"

class ManageEventPage extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      //event: Object.assign({}, props.event),
      errors: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.rule) {
      if (this.state.rule !== nextProps.rule) {
        this.setState({rule: Object.assign({}, this.state.rule, nextProps.rule)})
      }
    }
  }

  render() {
    return (
      <EventForm
        event={this.props.event}
        ruleset={this.props.ruleset}
        rules={this.props.rules}
        createRule={this.props.createRule}
      />
    );
  }
}



function getEventById(events, id) {
  const event = toArray(events).filter(event => event.id === id);
  if (event) return event[0]; //since filter returns an array, have to grab the first.
  return null;
}

function getRulesByIds(allRules, ids) {
  if (ids === undefined) { ids = [] }
  return toArray(allRules).filter(item => ids.includes(item.id));
}

function mapStateToProps(state, ownProps) {
  const eventId = ownProps.match.params.id; // from the path `/course/:id`

  let event = {id: '', name: ''};
  let ruleset = [];

  if (eventId && toArray(state.events).length > 0) {
    event = getEventById(state.events, eventId);
    if (toArray(state.rules).length > 0) {
      ruleset = getRulesByIds(state.rules, event.ruleset);
    }
  }

  return {
    event: event,
    ruleset: ruleset,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createRule : (eventId) => {
      dispatch(createRule(eventId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageEventPage);