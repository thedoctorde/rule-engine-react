import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function ruleReducer(state = initialState.rules, action) {
  switch (action.type) {
    case types.LOAD_RULES_SUCCESS:
      return action.rules;

    case types.UPDATE_RULE_SUCCESS:

      let m = {}
      m[action.rule.id] = action.rule;
      return Object.assign({}, state, m);
    default:
      return state;
  }
}
