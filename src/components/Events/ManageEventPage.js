import React, {Component} from 'react';
import {connect} from 'react-redux'
import EventForm from "./EventForm";
import toArray from "../../utils/helpers"
import {createRule, uploadEvents, updateRule, deleteRule} from "../../actions/eventActions"

class ManageEventPage extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
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
        updateRule={this.props.updateRule}
        deleteRule={this.props.deleteRule}

        store={this.props.store}
        uploadEvents={this.props.uploadEvents}
        ruleTypes={this.props.ruleTypes}
        nameToFields={this.props.nameToFields}
        operators={this.props.operators}
        momentNames={this.props.momentNames}
        mappingNames={this.props.mappingNames}
        paramNames={this.props.paramNames}
        valueTypes={this.props.valueTypes}
        mappingPossibleValues={this.props.mappingPossibleValues}
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
    store: state,
    event: event,
    ruleset: ruleset,
    ruleTypes: state.ruleTypes.map(item => item),
    nameToFields: state.nameToFields.map(item => item),
    operators: state.operators.map(item => item),
    momentNames: state.momentNames.map(item => item),
    mappingNames: state.mappingNames.map(item => item),
    paramNames: state.paramNames.map(item => item),
    valueTypes: state.valueTypes.map(item => item),
    mappingPossibleValues: state.mappingPossibleValues.map(item => item)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createRule : (eventId) => {
      dispatch(createRule(eventId))
    },
    updateRule: (rule) => {
      dispatch(updateRule(rule))
    },
    uploadEvents: (eventId, store) => {
      dispatch(uploadEvents(eventId, store))
    },
    deleteRule: (id, eventId) => {
      dispatch(deleteRule(id, eventId))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageEventPage);