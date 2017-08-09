import * as types from './actionTypes';
import eventsApi from '../api/mockEventApi';

export function loadEventsSuccess(events) {
  return { type: types.LOAD_EVENTS_SUCCESS, events};
}

export function loadRulesSuccess(rules) {
  return { type: types.LOAD_RULES_SUCCESS, rules};
}

export function loadSubrulesSuccess(subrules) {
  return { type: types.LOAD_SUBRULES_SUCCESS, subrules};
}
export function loadRulesetsSuccess(rulesets) {
  return { type: types.LOAD_RULESETS_SUCCESS, rulesets};
}

export function createEventSuccess(course) {
  return {type: types.CREATE_EVENT_SUCCESS, course};
}

export function updateEventSuccess(course) {
  return {type: types.UPDATE_EVENT_SUCCESS, course};
}

export function loadEvents() {
  return function(dispatch) {
    //dispatch(beginAjaxCall());
    return eventsApi.getAllEvents().then(response => {
      dispatch(loadEventsSuccess(response.entities.events));
      dispatch(loadRulesSuccess(response.entities.rules));
      dispatch(loadSubrulesSuccess(response.entities.subrules));
      dispatch(loadRulesetsSuccess(response.entities.rulesets));
    }).catch(error => {
      throw(error);
    });
  };
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
