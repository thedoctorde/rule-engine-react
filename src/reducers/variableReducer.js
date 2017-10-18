import initialState from './initialState';
import * as types from '../actions/actionTypes';

export function variableReducer(state = initialState.filterByMoment, action) {
  switch (action.type) {
    case types.UPDATE_FILTER_BY_MOMENT_SUCCESS:
      return action.value;
    default:
      return state;
  }
}