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
    // [
    //   ...state.filter(event => event.id !== action.event.id),
    //   Object.assign({}, e)
    // ];

    default:
      return state;
  }
}
