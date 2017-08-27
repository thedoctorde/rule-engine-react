import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function eventReducer(state = initialState.events, action) {
  switch (action.type) {
    case types.LOAD_EVENTS_SUCCESS:
      return action.events;

    case types.CREATE_EVENT_SUCCESS:
      return {
        ...state,
        [action.event.id]: action.event
      };

    case types.UPDATE_EVENT_SUCCESS:
      return {
        ...state,
        [action.event.id]: action.event
      };

    case types.UPDATE_EVENT_RULESET_SUCCESS:
      var e = Object.assign({}, state[action.eventId]);
      e.ruleset = [
        ...e.ruleset,
        action.ruleId];
      var m = Object.assign({}, state);
      m[e.id] = e;
      return Object.assign({}, m);

    case types.UPDATE_EVENT_ACTIONS_SUCCESS:
      var e = Object.assign({}, state[action.eventId]);
      e.actions = [
        ...e.actions,
        action.actionId];
      var m = Object.assign({}, state);
      m[e.id] = e;
      return Object.assign({}, m);

    case types.DELETE_RULE_FROM_EVENT_RULESET_SUCCESS:
      var e = Object.assign({}, state[action.eventId]);
      e.ruleset = e.ruleset.filter(item => item !== action.id);
      var m = Object.assign({}, state);
      m[e.id] = e;
      return Object.assign({}, m);

    case types.DELETE_ACTION_FROM_EVENT_SUCCESS:
      var e = Object.assign({}, state[action.eventId]);
      e.actions = e.actions.filter(item => item !== action.id);
      var m = Object.assign({}, state);
      m[e.id] = e;
      return Object.assign({}, m);

    default:
      return state;
  }
}
