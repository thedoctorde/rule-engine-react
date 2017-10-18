import {combineReducers} from 'redux';
import events from './eventReducer';
import rules from './ruleReducer';
import subrules from './subruleReducer';
import rulesets from './rulesetReducer';
import actions from './actionReducer';

import {
  actionListReducer as actionList,
  actionExpireTypeReducer as actionExpireTypes,
  actionTypeReducer as actionTypes,
} from "./actionReducer";

import ruleTypes from './ruleTypeReducer';
import momentNames from './momentNameReducer';
import operators from './operatorReducer';
import {valueTypeReducer as valueTypes, valueTypeForSuberulesReducer as valueTypesForSubrules} from './valueTypeReducer';
import paramNames from './paramNameReducer';
import mappingNames from './mappingNameReducer';
import mappingPossibleValues from './mappingPossibleValuesReducer';
import {fieldsReducer as fields, boolParamsReducer as boolParams} from './fieldsReducer';
import {variableReducer as filterByMoment} from "./variableReducer";


const rootReducer = combineReducers({
  events,
  rules,
  subrules,
  rulesets,
  actions,
  ruleTypes,
  momentNames,
  operators,
  valueTypes,
  valueTypesForSubrules,
  paramNames,
  mappingNames,
  mappingPossibleValues,
  fields,
  boolParams,
  actionList,
  actionExpireTypes,
  actionTypes,
  filterByMoment,
});

export default rootReducer;