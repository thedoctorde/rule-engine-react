import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import HourBetween from "./RuleTypeEditors/HourBetween"
import LastMoments from "./RuleTypeEditors/LastMoments";
import Param from "./RuleTypeEditors/Param";
import OldVsNew from "./RuleTypeEditors/OldVsNew";
import Mapping from "./RuleTypeEditors/Mapping";
import ComplexParam from "./RuleTypeEditors/ComplexParam";
import {updateRule, deleteRule} from "../../actions/eventActions";
import {getFilteredMappingValues} from "../../utils/selctors";
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  display: "flex",
  alignItems: "start",

};

const deleteButtonStyle = {
  marginLeft: 12,
  marginRight: 12,
};

export class Rule extends React.Component {
  constructor(props, context) {
    super(props, context);
    let newState = Object.assign(
      {},
      props.rule,
      {mappingPossibleValues: getFilteredMappingValues(props.mappingPossibleValues, props.rule.mappingName)}
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
  handleChangeMomentName = (event, index, value) => {
    let newState = Object.assign(
      {},
      this.props.rule,
      {momentName: value}
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
  handleChangeValueType = (event, index, value) => {
    let newState = Object.assign(
      {},
      this.props.rule,
      {valueType: value}
    );
    this.props.updateRule(newState)
  };
  handleChangeParamName = (event, index, value) => {
    let newState = Object.assign(
      {},
      this.props.rule,
      {name: value}
    );
    this.props.updateRule(newState)
  };
  handleChangeMappingName = (event, index, value) => {
    let newState = Object.assign(
      {},
      this.props.rule,
      {
        mappingName: value,
      }
    );
    this.props.updateRule(newState);
    this.setState(Object.assign(
      {},
      this.state,
      {mappingPossibleValues: getFilteredMappingValues(this.props.mappingPossibleValues, value)}))
  };
  handleChangeValue = (event, value) => {
    let newState = Object.assign(
      {},
      this.props.rule,
      {
        value: value,
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
    //console.log("key: ", key, ", payload: ", payload)
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
            momentName={this.props.rule.momentName}
            momentNames={this.props.momentNames}
            operator={this.props.rule.operator}
            operators={this.props.operators}
            handleChangeMomentName={this.handleChangeMomentName}
            handleChangeOperator={this.handleChangeOperator}
          />
        );
      case "param" :
        return (
          <Param
            paramName={this.props.rule.name}
            paramNames={getSimpleParams(this.props.paramNames)}
            handleChangeParamName={this.handleChangeParamName}
            operator={this.props.rule.operator}
            operators={this.props.operators}
            handleChangeOperator={this.handleChangeOperator}
            valueType={this.props.rule.valueType}
            valueTypes={this.props.valueTypes}
            handleChangeValueType={this.handleChangeValueType}
            value={this.props.rule.value}
            handleChangeValue={this.handleChangeValue}
          />
        );
      case "old_vs_new":
        return (
          <OldVsNew
            paramName={this.props.rule.name}
            paramNames={getSimpleParams(this.props.paramNames)}
            handleChangeParamName={this.handleChangeParamName}
            operator={this.props.rule.operator}
            operators={this.props.operators}
            handleChangeOperator={this.handleChangeOperator}
          />
        );
      case "mapping":
        return (
          <Mapping
            paramName={this.props.rule.name}
            paramNames={getSimpleParams(this.props.paramNames)}
            handleChangeParamName={this.handleChangeParamName}
            operator={this.props.rule.operator}
            operators={this.props.operators}
            handleChangeOperator={this.handleChangeOperator}
            mappingName={this.props.rule.mappingName}
            mappingNames={this.props.mappingNames}
            handleChangeMappingName={this.handleChangeMappingName}
            mappingValues={this.props.rule.value}
            mappingPossibleValues={this.state.mappingPossibleValues}
            handleChangeMappingValues={this.handleChangeMappingValues}
          />
        );
      case "complex_param":
        return (
          <ComplexParam
            subrules={this.props.rule.rules}
            paramName={this.props.rule.name}
            paramNames={getComplexParams(this.props.paramNames)}
            handleChangeParamName={this.handleChangeParamName}
          />
        )
      default:
        return false
    }
  }


  render() {
    const {rule} = this.state;
    const {eventId} = this.props;
    return (
      <div style={style}>
        <RaisedButton
          label="Delete"
          secondary={true}
          style={deleteButtonStyle}
          onClick={() => {
            this.props.deleteRule(rule.id, eventId)
          }
          }/>
        <SelectField
          floatingLabelText="Rule Type"
          value={this.props.rule.type}
          onChange={this.handleRuleTypeChange}>
          {
            this.props.ruleTypes.map(ruleType => {
              return <MenuItem value={ruleType.value} primaryText={ruleType.value} key={ruleType.id}/>
            })
          }
        </SelectField>
        {this.section(this.props.rule.type)}
      </div>
    );
  }
}

function getSimpleParams(params) {
  return params.filter(item => item.type === "simple")
}

function getComplexParams(params) {
  return params.filter(item => item.type === "complex")
}


function mapDispatchToProps(dispatch) {
  return {
    updateRule: (rule) => {
      dispatch(updateRule(rule))
    },
    deleteRule: (id, eventId) => {
      dispatch(deleteRule(id, eventId))
    }

  }
}

export default Rule;
//export default connect(mapStateToProps, mapDispatchToProps)(Rule);
