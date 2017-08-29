import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function ruleReducer(state = initialState.subrules, action) {
  switch (action.type) {
    case types.LOAD_SUBRULES_SUCCESS:
      if (action.subrules)
        return action.subrules;
      else
        return []
    case types.CREATE_SUBRULE_SUCCESS:
      return {
        ...state,
        [action.subrule.id]: action.subrule
      };
    case types.UPDATE_SUBRULE_SUCCESS:
      return {
        ...state,
        [action.subrule.id]: action.subrule
      }

    case types.DELETE_SUBRULE_SUCCESS:
      let {[action.id]: deleted, ...newState} = state;
      return newState;
    default:
      return state;
  }
}
