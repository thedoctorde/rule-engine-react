import {combineReducers} from 'redux';
import events from './eventReducer';
import rules from './ruleReducer';
import subrules from './subruleReducer';
import rulesets from './rulesetReducer';



import ruleTypes from './ruleTypeReducer';
import momentNames from './momentNameReducer';
import operators from './operatorReducer';
import valueTypes from './valueTypeReducer';
import paramNames from './paramNameReducer';
import mappingNames from './mappingNameReducer';
import mappingPossibleValues from './mappingPossibleValuesReducer';
import nameToFields from './nameToFieldsReducer';


const rootReducer = combineReducers({
  events,
  rules,
  subrules,
  rulesets,
  ruleTypes,
  momentNames,
  operators,
  valueTypes,
  paramNames,
  mappingNames,
  mappingPossibleValues,
  nameToFields,
});

export default rootReducer;