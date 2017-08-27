import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function ruleReducer(state = initialState.rules, action) {
  switch (action.type) {
    case types.LOAD_RULES_SUCCESS:
      return action.rules;

    case types.UPDATE_RULE_SUCCESS:
      return {
        ...state,
        [action.rule.id]: action.rule
      };

    case types.UPDATE_SUBRULES_SUCCESS:
      var e = Object.assign({}, state[action.ruleId]);
      if (e.rules) {
        e.rules = [...e.rules, action.subruleId];
      } else {
        e.rules = [action.subruleId]
      }

      var m = Object.assign({}, state);
      m[e.id] = e;
      return Object.assign({}, m);

    case types.DELETE_RULE_SUCCESS:
      let  {[action.id]: deleted, ...newState} = state;
      return newState;

    case types.DELETE_SUBRULE_FROM_RULE_SUCCESS:
      let ev = Object.assign({}, state[action.ruleId]);
      ev.rules = ev.rules.filter(item => item !== action.id);
      let m1 = Object.assign({}, state);
      m1[ev.id] = ev;
      return Object.assign({}, m1);
    default:
      return state;
  }
}
