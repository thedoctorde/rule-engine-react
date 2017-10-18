import * as types from './actionTypes';

export function updateFilterByMomentSuccess(value) {
  return {type: types.UPDATE_FILTER_BY_MOMENT_SUCCESS, value: value};
}


export function updateFilterByMoment(value) {
  return function (dispatch) {
    dispatch(updateFilterByMomentSuccess(value))
  }
}