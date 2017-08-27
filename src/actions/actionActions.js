
import * as types from './actionTypes';
import eventsApi from '../api/mockEventApi';


export function loadActionsSuccess(actions) {
  return {
    type: types.LOAD_ACTIONS_SUCCESS,
    actions: actions
  };
}

export function updateActionSuccess(action) {
  return {type: types.UPDATE_ACTION_SUCCESS, action: action};
}


export function updateEventActionsSuccess(eventId, actionId) {
  return {
    type: types.UPDATE_EVENT_ACTIONS_SUCCESS,
    eventId: eventId,
    actionId: actionId
  };
}

export function deleteActionSuccess(id) {
  return {type: types.DELETE_ACTION_SUCCESS, id};
}

export function deleteActionFromEventSuccess(id, eventId) {
  return {type: types.DELETE_ACTION_FROM_EVENT_SUCCESS, id, eventId};
}



export function createAction(eventId) {
  return function (dispatch) {
    return eventsApi.createAction(eventId).then(({action, event}) => {
      dispatch(updateEventActionsSuccess(event.id, action.id));
      dispatch(updateActionSuccess(action))
    }).catch(error => {
      throw(error)
    });
  }
}

export function updateAction(action) {
  return function (dispatch) {
    return eventsApi.saveAction(action).then(action => {
      dispatch(updateActionSuccess(action))
    }).catch(error => {
      throw(error)
    });
  }
}

export function deleteAction(id, eventId) {
  return function (dispatch) {
    return eventsApi.deleteAction(id, eventId).then(() => {
      dispatch(deleteActionSuccess(id));
      dispatch(deleteActionFromEventSuccess(id, eventId))
    }).catch(error => {
      throw(error)
    });
  }
}