import * as types from '../actions/actionTypes';
import initialState from './initialState';


export function actionListReducer(state = initialState.actionList, action) {
  return state
}

export function actionTypeReducer(state = initialState.actionTypes, action) {
  return state
}

export function actionExpireTypeReducer(state = initialState.actionExpireTypes, action) {
  return state
}

export default function actionReducer(state = initialState.actions, action) {
  switch (action.type) {
    case types.LOAD_ACTIONS_SUCCESS:
      return action.actions;

    case types.UPDATE_ACTION_SUCCESS:
      return {
        ...state,
        [action.action.id]: action.action
      };

    case types.DELETE_ACTION_SUCCESS:
      let  {[action.id]: deleted, ...newState} = state;
      return newState;

    default:
      return state;
  }
}

