import React, {Component} from 'react';
import {connect} from 'react-redux'
import EventForm from "./EventForm";
import toArray from "../../utils/helpers"
import {uploadEvents, updateEvent, createRule, updateRule, deleteRule} from "../../actions/eventActions"
import {createAction, updateAction, deleteAction} from "../../actions/actionActions"
import * as subruleActions from "../../actions/subruleActions"

class ManageEventPage extends Component {

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
        subrules={this.props.subrules}
        store={this.props.store}
        createRule={this.props.createRule}
        updateRule={this.props.updateRule}
        deleteRule={this.props.deleteRule}
        createSubrule={this.props.createSubrule}
        deleteSubrule={this.props.deleteSubrule}
        uploadEvents={this.props.uploadEvents}
        ruleTypes={this.props.ruleTypes}
        nameToFields={this.props.nameToFields}
        operators={this.props.operators}
        momentNames={this.props.momentNames}
        mappingNames={this.props.mappingNames}
        paramNames={this.props.paramNames}
        valueTypes={this.props.valueTypes}
        mappingPossibleValues={this.props.mappingPossibleValues}
        boolParams={this.props.boolParams}
        actions={this.props.actions}
        actionList={this.props.actionList}
        actionTypes={this.props.actionTypes}
        actionExpireTypes={this.props.actionExpireTypes}
        updateAction={this.props.updateAction}
        createAction={this.props.createAction}
        deleteAction={this.props.deleteAction}

        updateEvent={this.props.updateEvent}
      />
    );
  }
}



function getEventById(events, id) {
  const event = toArray(events).filter(event => event.id === id);
  if (event) return event[0]; //since filter returns an array, have to grab the first.
  return null;
}

function getItemsByIds(allItems, ids) {
  if (ids === undefined) { ids = [] }
  return toArray(allItems).filter(item => ids.includes(item.id));
}

function mapStateToProps(state, ownProps) {
  const eventId = ownProps.match.params.id; // from the path `/course/:id`

  let event = {id: '', name: ''};
  let ruleset = [];
  let actions = [];

  if (eventId) event = getEventById(state.events, eventId);

  if (eventId && toArray(state.events).length > 0) {
    if (toArray(state.rules).length > 0) {
      ruleset = getItemsByIds(state.rules, event.ruleset);
    }
  }

  if (eventId && toArray(state.actions).length > 0) {
    if (toArray(state.actions).length > 0) {
      actions = getItemsByIds(state.actions, event.actions);
    }
  }

  return {
    store: state,
    event: event,
    ruleset: ruleset,
    subrules: Object.assign({}, state.subrules),
    actions: actions,
    ruleTypes: state.ruleTypes.map(item => item),
    operators: state.operators.map(item => item),
    momentNames: state.momentNames.map(item => item),
    mappingNames: state.mappingNames.map(item => item),
    paramNames: state.paramNames.map(item => item),
    valueTypes: state.valueTypes.map(item => item),
    mappingPossibleValues: state.mappingPossibleValues.map(item => item),
    boolParams: state.boolParams.map(i => i),
    actionList: state.actionList.map(item => item),
    actionTypes: state.actionTypes.map(item => item),
    actionExpireTypes: state.actionExpireTypes.map(item => item),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    uploadEvents: (eventId, store) => {
      dispatch(uploadEvents(eventId, store))
    },

    updateEvent: (event) => {
      dispatch(updateEvent(event))
    },

    createRule : (eventId) => {
      dispatch(createRule(eventId))
    },
    updateRule: (rule) => {
      dispatch(updateRule(rule))
    },
    deleteRule: (id, eventId) => {
      dispatch(deleteRule(id, eventId))
    },

    createSubrule: (ruleId) => {
      dispatch(subruleActions.createSubrule(ruleId))
    },
    deleteSubrule: (id, ruleId) => {
      dispatch(subruleActions.deleteSubrule(id, ruleId))
    },

    createAction : (eventId) => {
      dispatch(createAction(eventId))
    },
    updateAction: (action) => {
      dispatch(updateAction(action))
    },
    deleteAction: (id, eventId) => {
      dispatch(deleteAction(id, eventId))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageEventPage);