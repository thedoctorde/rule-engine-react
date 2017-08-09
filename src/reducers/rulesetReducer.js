import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function rulesetReducer(state = initialState.rulesets, action) {
  switch (action.type) {
    case types.LOAD_RULESETS_SUCCESS:
      return action.rulesets;
    default:
      return state;
  }
}
