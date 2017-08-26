import * as types from './actionTypes';
import eventsApi from '../api/mockEventApi';


export function updateSubrulesInRuleSuccess(ruleId, subruleId) {
  return {
    type: types.UPDATE_SUBRULES_SUCCESS,
    ruleId: ruleId,
    subruleId: subruleId,
  };
}

export function createSubruleSuccess(subrule) {
  return {
    type: types.CREATE_SUBRULE_SUCCESS,
    subrule: subrule,
  };
}

export function deleteSubruleSuccess(id) {
  return {type: types.DELETE_SUBRULE_SUCCESS, id};
}

export function deleteSubruleFromRuleSuccess(id, ruleId) {
  return {type: types.DELETE_SUBRULE_FROM_RULE_SUCCESS, id, ruleId};
}

export function updateSubruleSuccess(subrule) {
  return {
    type: types.UPDATE_SUBRULE_SUCCESS,
    subrule: subrule
  };
}



export function createSubrule(ruleId) {
  return function (dispatch) {
    return eventsApi.createSubrule(ruleId).then(({subrule, rule}) => {
      dispatch(updateSubrulesInRuleSuccess(rule.id, subrule.id));
      dispatch(createSubruleSuccess(subrule))
    }).catch(error => {
      throw(error)
    });
  }
}


export function deleteSubrule(id, ruleId) {
  return function (dispatch) {
    return eventsApi.deleteSubrule(id, ruleId).then(() => {
      dispatch(deleteSubruleSuccess(id));
      dispatch(deleteSubruleFromRuleSuccess(id, ruleId))
    }).catch(error => {
      throw(error)
    });
  }
}

export function updateSubrule(subrule) {
  return function (dispatch) {
    return eventsApi.saveSubrule(subrule).then(subrule => {
      dispatch(updateSubruleSuccess(subrule))
    }).catch(error => {
      throw(error)
    });
  }
}

