import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function eventReducer(state = initialState.events, action) {
  let e, m;
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
      e = Object.assign({}, state[action.eventId]);
      e.ruleset = [
        ...e.ruleset,
        action.ruleId];
      m = Object.assign({}, state);
      m[e.id] = e;
      return Object.assign({}, m);

    case types.UPDATE_EVENT_ACTIONS_SUCCESS:
      e = Object.assign({}, state[action.eventId]);
      e.actions = [
        ...e.actions,
        action.actionId];
      m = Object.assign({}, state);
      m[e.id] = e;
      return Object.assign({}, m);

    case types.DELETE_RULE_FROM_EVENT_RULESET_SUCCESS:
      e = Object.assign({}, state[action.eventId]);
      e.ruleset = e.ruleset.filter(item => item !== action.id);
      m = Object.assign({}, state);
      m[e.id] = e;
      return Object.assign({}, m);

    case types.DELETE_ACTION_FROM_EVENT_SUCCESS:
      e = Object.assign({}, state[action.eventId]);
      e.actions = e.actions.filter(item => item !== action.id);
      m = Object.assign({}, state);
      m[e.id] = e;
      return Object.assign({}, m);

    default:
      return state;
  }
}
