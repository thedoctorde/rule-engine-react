import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function eventReducer(state = initialState.events, action) {
  switch (action.type) {
    case types.LOAD_EVENTS_SUCCESS:
      return action.events;

    case types.CREATE_EVENT_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.event)
      ];

    case types.UPDATE_EVENT_SUCCESS:
      return [
        ...state.filter(event => event.id !== action.event.id),
        Object.assign({}, action.event)
      ];

    case types.UPDATE_EVENT_RULESET_SUCCESS:
      let e = Object.assign({}, state[action.eventId]);
      e.ruleset = [
        ...e.ruleset,
        action.ruleId];
      let m = Object.assign({}, state);
      m[e.id] = e;
      return Object.assign({}, m);

    case types.DELETE_RULE_FROM_EVENT_RULESET_SUCCESS:
      let ev = Object.assign({}, state[action.eventId]);
      ev.ruleset = ev.ruleset.filter(item => item !== action.id);
      let m1 = Object.assign({}, state);
      m1[ev.id] = ev;
      return Object.assign({}, m1);

    default:
      return state;
  }
}
