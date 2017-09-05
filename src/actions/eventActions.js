import * as types from './actionTypes';
import eventsApi from '../api/mockEventApi';
import {loadActionsSuccess} from './actionActions'

export function loadEventsSuccess(events) {
  return {type: types.LOAD_EVENTS_SUCCESS, events};
}

export function loadRulesSuccess(rules) {
  return {type: types.LOAD_RULES_SUCCESS, rules};
}

export function loadSubrulesSuccess(subrules) {
  return {type: types.LOAD_SUBRULES_SUCCESS, subrules};
}

export function updateEventSuccess(event) {
  return {type: types.UPDATE_EVENT_SUCCESS, event};
}

export function createEventSuccess(event) {
  return {type: types.CREATE_EVENT_SUCCESS, event};
}

export function updateRuleSuccess(rule) {
  return {type: types.UPDATE_RULE_SUCCESS, rule};
}

export function deleteRuleSuccess(id) {
  return {type: types.DELETE_RULE_SUCCESS, id};
}

export function deleteRuleFromEventRulesetSuccess(id, eventId) {
  return {type: types.DELETE_RULE_FROM_EVENT_RULESET_SUCCESS, id, eventId};
}

export function updateEventRulesetSuccess(eventId, ruleId) {
  return {
    type: types.UPDATE_EVENT_RULESET_SUCCESS,
    eventId: eventId,
    ruleId: ruleId
  };
}


export function loadEvents() {
  return function (dispatch) {
    return eventsApi.getAllEvents().then(response => {
      if (response.entities.events) {
        dispatch(loadEventsSuccess(response.entities.events));
      }
      if (response.entities.rules) {
        dispatch(loadRulesSuccess(response.entities.rules));
      }
      if (response.entities.subrules) {
        dispatch(loadSubrulesSuccess(response.entities.subrules));
      }
      if (response.entities.actions) {
        dispatch(loadActionsSuccess(response.entities.actions));
      }
    }).catch(error => {
    });
  };
}


export function updateEvent(event) {
  return function (dispatch) {
    return eventsApi.saveEvent(event).then(event => {
      dispatch(updateEventSuccess(event))
    }).catch(error => {
      throw(error)
    });
  }
}

export function updateRule(rule) {
  return function (dispatch) {
    return eventsApi.saveRule(rule).then(rule => {
      dispatch(updateRuleSuccess(rule))
    }).catch(error => {
      throw(error)
    });
  }
}

export function deleteRule(id, eventId) {
  return function (dispatch) {
    return eventsApi.deleteRule(id, eventId).then(() => {
      dispatch(deleteRuleSuccess(id));
      dispatch(deleteRuleFromEventRulesetSuccess(id, eventId))
    }).catch(error => {
      throw(error)
    });
  }
}

export function createRule(eventId) {
  return function (dispatch) {
    return eventsApi.createRule(eventId).then(({rule, event}) => {
      dispatch(updateEventRulesetSuccess(event.id, rule.id));
      dispatch(updateRuleSuccess(rule))
    }).catch(error => {
      throw(error)
    });
  }
}

export function createEvent() {
  return function (dispatch) {
    return eventsApi.createEvent().then((event) => {
      dispatch(createEventSuccess(event));
      return event;
    }).catch(error => {
      throw(error)
    });
  }
}


export function uploadEvent(event, store) {
  return function (dispatch) {
    var zevent = store.events[event];
    return eventsApi.sendEventToServer(event, store)
      .then(res => res.json())
      .then(
        data => {
          dispatch(updateEventSuccess(Object.assign({}, zevent, {isFetched: true})));
        },
        err => {
        }
      )
  }
}


