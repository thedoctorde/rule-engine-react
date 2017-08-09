import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function ruleReducer(state = initialState.rules, action) {
  switch (action.type) {
    case types.LOAD_RULES_SUCCESS:
      return action.rules;
    default:
      return state;
  }
}
