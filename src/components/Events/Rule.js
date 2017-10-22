import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import HourBetween from "./RuleTypeEditors/HourBetween"
import LastMoments from "./RuleTypeEditors/LastMoments";
import SimpleParam from "./RuleTypeEditors/SimpleParam";
import Old from "./RuleTypeEditors/Old";
import OldVsNew from "./RuleTypeEditors/OldVsNew";
import ComplexParam from "./RuleTypeEditors/ComplexParam";
import {getFilteredMappingValues} from "../../utils/selctors";
import {typize} from "../../utils/helpers";
import RaisedButton from 'material-ui/RaisedButton';
import MomentTiming from "./RuleTypeEditors/MomentTiming";
import CompareParams from "./RuleTypeEditors/CompareParams";
import AppAction from "./RuleTypeEditors/AppAction";
import AppCategory from "./RuleTypeEditors/AppCategory";


const style = {
  display: "flex",
  alignItems: "start",
  alignContent: "center",
  //justifyContent: "space-between",
  padding: "5px 20px 15px",
  marginBottom: 10,
  marginTop: 10,
  backgroundColor: "#eee"
};

const deleteButtonStyle = {
  marginLeft: "auto",
  marginRight: 12,
  display: "flex",
  alignSelf: "center",
};

const helpButtonStyle = {
  marginTop: "40px",
  marginRight: "15px",
  display: "block",
  textDecoration: "none",
  color: "rgba(0, 0, 0, 0.3)"
}


export class Rule extends React.Component {
  constructor(props, context) {
    super(props, context);
    let newState = Object.assign(
      {},
      props.rule,
      {mappingPossibleValues: getFilteredMappingValues(props.mappingPossibleValues, props.rule.mapping_name)}
    );
    this.state = newState;
  }

  handleRuleTypeChange = (event, index, value) => {
    let newState = {
      id: this.state.id,
      type: value,
    };
    this.props.updateRule(newState)
  };
  handleChangeMin = (event, index, value) => {
    let newState = Object.assign(
      {},
      this.props.rule,
      {min: value}
    );
    this.props.updateRule(newState)
  };
  handleChangeMax = (event, index, value) => {
    let newState = Object.assign(
      {},
      this.props.rule,
      {max: value}
    );
    this.props.updateRule(newState)
  };
  handleChangeOperator = (event, index, value) => {
    let newState = Object.assign(
      {},
      this.props.rule,
      {operator: value}
    );
    this.props.updateRule(newState)
  };
  handleChangeName = (event, index, value) => {
    let newState = Object.assign(
      {},
      this.props.rule,
      {name: value}
    );
    this.props.updateRule(newState)
  };
  handleChangeAfter = (event, index, value) => {
    let newState = Object.assign(
      {},
      this.props.rule,
      {after: value}
    );
    this.props.updateRule(newState)
  };
  handleChangeValue = (event, value, type) => {
    let newValue = typize(value, type);
    let newState = Object.assign(
      {},
      this.props.rule,
      {
        value: newValue !== null ? newValue : this.props.rule.value,
      }
    );
    this.props.updateRule(newState);
  };
  handleChangeSelectValue = (event, index, value) => {
    let newState = Object.assign(
      {},
      this.props.rule,
      {
        value: value,
      }
    );
    this.props.updateRule(newState);
  };
  handleChangeArrayValue = (event, value) => {
    let newState = Object.assign(
      {},
      this.props.rule,
      {
        value: value.replace(", ", ",").replace(" ,", ",").split(',').map(item => typize(item)),
      }
    );
    this.props.updateRule(newState);
  };

  handleChangeMappingValues = (event, key, payload) => {
    let newState = Object.assign(
      {},
      this.props.rule,
      {
        value: payload
      }
    );

    this.props.updateRule(newState);
  };
  handleChangeParam1 = (event, index, value) => {
    let newState = Object.assign(
      {},
      this.props.rule,
      {param1: value}
    );
    this.props.updateRule(newState)
  };
  handleChangeParam2 = (event, index, value) => {
    let newState = Object.assign(
      {},
      this.props.rule,
      {param2: value}
    );
    this.props.updateRule(newState)
  };


  section(type) {
    switch (type) {
      case "hour_between":
        return (
          <HourBetween
            valueFrom={this.props.rule.min}
            valueTo={this.props.rule.max}
            handleChangeFrom={this.handleChangeMin}
            handleChangeTo={this.handleChangeMax}
          />
        );
      case "last_moments":
        return (
          <LastMoments
            name={this.props.rule.name}
            momentNames={this.props.momentNames}
            handleChangeName={this.handleChangeName}
            operator={this.props.rule.operator}
            operators={this.props.operators}
            handleChangeOperator={this.handleChangeOperator}
          />
        );
      case "param" :
        return (
          <SimpleParam
            paramName={this.props.rule.name}
            paramNames={getSimpleParams(this.props.paramNames)}
            handleChangeParamName={this.handleChangeName}
            operator={this.props.rule.operator}
            operators={this.props.operators}
            handleChangeOperator={this.handleChangeOperator}
            value={this.props.rule.value}
            handleChangeValue={this.handleChangeValue}
            handleChangeArrayValue={this.handleChangeArrayValue}
            handleChangeSelectValue={this.handleChangeSelectValue}
            boolParams={this.props.boolParams}
          />
        );
      case "old" :
        return (
          <Old
            paramName={this.props.rule.name}
            paramNames={getSimpleParams(this.props.paramNames)}
            handleChangeParamName={this.handleChangeName}
            operator={this.props.rule.operator}
            operators={this.props.operators}
            handleChangeOperator={this.handleChangeOperator}
            value={this.props.rule.value}
            handleChangeValue={this.handleChangeValue}
          />
        );
      case "old_vs_new":
        return (
          <OldVsNew
            paramName={this.props.rule.name}
            paramNames={getSimpleParams(this.props.paramNames)}
            handleChangeParamName={this.handleChangeName}
            operator={this.props.rule.operator}
            operators={this.props.operators}
            handleChangeOperator={this.handleChangeOperator}
          />
        );

      case "app_action":
        return (
          <AppAction
            paramName={this.props.rule.name}
            paramNames={getMappingParams(this.props.paramNames)}
            handleChangeParamName={this.handleChangeName}
            operator={this.props.rule.operator}
            operators={this.props.operators}
            handleChangeOperator={this.handleChangeOperator}
            mappingValues={this.props.rule.value}
            mappingPossibleValues={getFilteredMappingValues(this.props.mappingPossibleValues, "appToActions")}
            handleChangeMappingValues={this.handleChangeMappingValues}
          />
        );
      case "app_category":
        return (
          <AppCategory
            paramName={this.props.rule.name}
            paramNames={getMappingParams(this.props.paramNames)}
            handleChangeParamName={this.handleChangeName}
            operator={this.props.rule.operator}
            operators={this.props.operators}
            handleChangeOperator={this.handleChangeOperator}
            mappingValues={this.props.rule.value}
            mappingPossibleValues={getFilteredMappingValues(this.props.mappingPossibleValues, "appToCategory")}
            handleChangeMappingValues={this.handleChangeMappingValues}
          />
        );
      case "complex_param":
        return (
          <ComplexParam
            ruleId={this.props.rule.id}
            subrules={this.props.rule.rules}
            allSubrules={this.props.subrules}
            paramName={this.props.rule.name}
            paramNames={getComplexParams(this.props.paramNames)}
            handleChangeParamName={this.handleChangeName}
            createSubrule={this.props.createSubrule}
            deleteSubrule={this.props.deleteSubrule}
          />
        );
      case "moment_timing":
        return (
          <MomentTiming
            name={this.props.rule.name}
            moments={this.props.momentNames}
            handleChangeName={this.handleChangeName}
            after={this.props.rule.after}
            handleChangeAfter={this.handleChangeAfter}
          />
        );
      case "compare_params":
        return (
          <CompareParams
            param1={this.props.rule.param1}
            param2={this.props.rule.param2}
            paramNames={this.props.paramNames}
            handleChangeParam1={this.handleChangeParam1}
            handleChangeParam2={this.handleChangeParam2}
            operator={this.props.rule.operator}
            operators={this.props.operators}
            handleChangeOperator={this.handleChangeOperator}
          />
        );
      default:
        return false
    }
  }


  render() {
    const {eventId, deleteRule} = this.props;
    return (
      <div style={style}>
        {this.props.rule.type ?
          <a
            style={helpButtonStyle}
            href={window.helpPage["rules"]["links"][this.props.rule.type].link}>?</a>
          : false}
        <SelectField
          floatingLabelText="Rule Type"
          value={this.props.rule.type}
          onChange={this.handleRuleTypeChange}>
          {
            this.props.ruleTypes.map(ruleType => {
              return <MenuItem value={ruleType.id} primaryText={ruleType.value} key={ruleType.id}/>
            })
          }
        </SelectField>
        {this.section(this.props.rule.type)}
        <RaisedButton
          label="Delete"
          secondary={true}
          style={deleteButtonStyle}
          onClick={() => {
            deleteRule(this.props.rule.id, eventId)
          }
          }/>
      </div>
    );
  }
}

function getSimpleParams(params) {
  return params.filter(item => item.type === "simple").sort((a, b) => {
    if (a.id > b.id) return 1;
    if (a.id < b.id) return -1;
    return 0
  })
}

function getMappingParams(params) {
  return params.filter(item => (item.id === "foreapp") || (item.id === "acap")).sort((a, b) => {
    if (a.id > b.id) return 1;
    if (a.id < b.id) return -1;
    return 0
  })
}

function getComplexParams(params) {
  return params.filter(item => item.type === "complex").sort((a, b) => {
    if (a.id > b.id) return 1;
    if (a.id < b.id) return -1;
    return 0
  })
}

export default Rule;
