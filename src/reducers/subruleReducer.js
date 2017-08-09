import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function ruleReducer(state = initialState.subrules, action) {
  switch (action.type) {
    case types.LOAD_SUBRULES_SUCCESS:
      return action.subrules;
    default:
      return state;
  }
}
