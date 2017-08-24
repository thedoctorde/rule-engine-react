import * as types from './actionTypes';
import eventsApi from '../api/mockEventApi';

export function loadEventsSuccess(events) {
  return {type: types.LOAD_EVENTS_SUCCESS, events};
}

export function loadRulesSuccess(rules) {
  return {type: types.LOAD_RULES_SUCCESS, rules};
}

export function loadSubrulesSuccess(subrules) {
  return {type: types.LOAD_SUBRULES_SUCCESS, subrules};
}

export function loadRulesetsSuccess(rulesets) {
  return {type: types.LOAD_RULESETS_SUCCESS, rulesets};
}

export function createEventSuccess(event) {
  return {type: types.CREATE_EVENT_SUCCESS, event};
}

export function updateEventSuccess(course) {
  return {type: types.UPDATE_EVENT_SUCCESS, course};
}

export function updateRuleSuccess(rule) {
  return {type: types.UPDATE_RULE_SUCCESS, rule};
}

export function deleteRuleSuccess(id) {
  return {type: types.DELETE_RULE_SUCCESS, id};
}

export function deleteRuleFromEventRulesetSuccess(id, eventId) {
  return {type: types.DELETE_RULE_FROM_EVENT_RULESET_SUCCESS, id, eventId};
}

export function updateEventRulesetSuccess(eventId, ruleId) {
  return {
    type: types.UPDATE_EVENT_RULESET_SUCCESS,
    eventId: eventId,
    ruleId: ruleId
  };
}


export function loadEvents() {
  return function (dispatch) {
    //dispatch(beginAjaxCall());
    return eventsApi.getAllEvents().then(response => {
      dispatch(loadEventsSuccess(response.entities.events));
      dispatch(loadRulesSuccess(response.entities.rules));
      dispatch(loadSubrulesSuccess(response.entities.subrules));
      //dispatch(loadRulesetsSuccess(response.entities.rulesets));
    }).catch(error => {
      throw(error);
    });
  };
}

export function updateRule(rule) {
  return function (dispatch) {
    return eventsApi.saveRule(rule).then(rule => {
      dispatch(updateRuleSuccess(rule))
    }).catch(error => {
      throw(error)
    });
  }
}

export function deleteRule(id, eventId) {
  return function (dispatch) {
    return eventsApi.deleteRule(id, eventId).then(() => {
      dispatch(deleteRuleSuccess(id));
      dispatch(deleteRuleFromEventRulesetSuccess(id, eventId))
    }).catch(error => {
      throw(error)
    });
  }
}

export function createRule(eventId) {
  return function (dispatch) {
    return eventsApi.createRule(eventId).then(({rule, event}) => {
      dispatch(updateEventRulesetSuccess(event.id, rule.id));
      dispatch(updateRuleSuccess(rule))
    }).catch(error => {
      throw(error)
    });
  }
}

export function createEvent() {
  return function (dispatch) {
    return eventsApi.createEvent().then(({event}) => {
      dispatch(createEventSuccess(event));
    }).catch(error => {
      throw(error)
    });
  }
}

export function uploadEvents(event, store) {
  return function (dispatch) {
    return eventsApi.sendEventToServer(event, store)
      .then(res => res.json())
      .then(
        data => {
          console.log("suc: ", data)
          //dispatch({ type: 'LOAD_DATA_SUCCESS', data })
        },
        err => {
          console.log("err: ", err)
          //dispatch({type: 'LOAD_DATA_FAILURE', err})
        }
      )
  }
}

// export function saveCourse(course) {
//   return function (dispatch, getState) {
//     dispatch(beginAjaxCall());
//     return courseApi.saveCourse(course).then(course => {
//       course.id ? dispatch(updateCourseSuccess(course)) :
//         dispatch(createCourseSuccess(course));
//     }).catch(error => {
//       dispatch(ajaxCallError(error));
//       throw(error);
//     });
//   };
// }
