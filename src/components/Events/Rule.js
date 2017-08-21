import React from 'react';
import {connect} from 'react-redux';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import HourBetween from "./RuleTypeEditors/HourBetween"
import LastMoments from "./RuleTypeEditors/LastMoments";
import Param from "./RuleTypeEditors/Param";
import OldVsNew from "./RuleTypeEditors/OldVsNew";
import Mapping from "./RuleTypeEditors/Mapping";
import ComplexParam from "./RuleTypeEditors/ComplexParam";
import {updateRule} from "../../actions/eventActions";

export class Rule extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      rule: Object.assign({}, props.rule)
    };
  }

  componentWillReceiveProps(nextProps) {
    //debugger;
    if (nextProps.rule) {
      if (this.state.rule !== nextProps.rule) {
        this.setState({rule: Object.assign({}, this.state.rule, nextProps.rule)})
      }
    }
  }

  handleRuleTypeChange = (event, index, value) => {
    let rule = Object.assign({}, this.state.rule, {type: value});
    this.props.updateRule(rule)
  };
  handleChangeFrom = (event, index, value) => {
    let rule = Object.assign({}, this.state.rule, {min: value});
    this.props.updateRule(rule)
  };
  handleChangeTo = (event, index, value) => {
    let rule = Object.assign({}, this.state.rule, {max: value});
    this.props.updateRule(rule)
  }
  handleChangeMomentName = (event, index, value) => {
    let rule = Object.assign({}, this.state.rule, {momentName: value});
    this.props.updateRule(rule)
  }
  handleChangeOperator = (event, index, value) => {
    let rule = Object.assign({}, this.state.rule, {operator: value});
    this.props.updateRule(rule)
  }
  handleChangeValueType = (event, index, value) => {
    let rule = Object.assign({}, this.state.rule, {valueType: value});
    this.props.updateRule(rule)
  }
  handleChangeParamName = (event, index, value) => {
    let rule = Object.assign({}, this.state.rule, {paramName: value});
    this.props.updateRule(rule)
  }
  handleChangeMappingName = (event, index, value) => {
    let rule = Object.assign({}, this.state.rule, {mappingName: value});
    this.props.updateRule(rule)
  }

  section(type) {
    switch (type) {
      case "hour_between":
        return (
          <HourBetween
            valueFrom={this.state.rule.min}
            valueTo={this.state.rule.max}
            handleChangeFrom={this.handleChangeFrom}
            handleChangeTo={this.handleChangeTo}
          />
        );
      case "last_moments":
        return (
          <LastMoments
            momentName={this.state.rule.momentName}
            momentNames={this.props.momentNames}
            operator={this.state.rule.operator}
            operators={this.props.operators}
            handleChangeMomentName={this.handleChangeMomentName}
            handleChangeOperator={this.handleChangeOperator}
          />
        );
      case "param" :
        return (
          <Param
            paramName={this.state.rule.paramName}
            paramNames={getSimpleParams(this.props.paramNames)}
            handleChangeParamName={this.handleChangeParamName}
            operator={this.state.rule.operator}
            operators={this.props.operators}
            handleChangeOperator={this.handleChangeOperator}
            valueType={this.state.rule.valueType}
            valueTypes={this.props.valueTypes}
            handleChangeValueType={this.handleChangeValueType}
          />
        );
      case "old_vs_new":
        return (
          <OldVsNew
            paramName={this.state.rule.paramName}
            paramNames={getSimpleParams(this.props.paramNames)}
            handleChangeParamName={this.handleChangeParamName}
            operator={this.state.rule.operator}
            operators={this.props.operators}
            handleChangeOperator={this.handleChangeOperator}
          />
        );
      case "mapping":
        return (
          <Mapping
            paramName={this.state.rule.paramName}
            paramNames={this.props.paramNames}
            handleChangeParamName={this.handleChangeParamName}
            operator={this.state.rule.operator}
            operators={this.props.operators}
            handleChangeOperator={this.handleChangeOperator}
            mappingName={this.state.rule.mappingName}
            mappingNames={this.props.mappingNames}
            handleChangeMappingName={this.handleChangeMappingName}
            mappingValues={this.state.rule.mappingValues}
            mappingPossibleValues={this.props.mappingPossibleValues}
          />
        );
      case "complex_param":
        return (
          <ComplexParam
            subrules={this.state.rule.rules}
            paramName={this.state.rule.paramName}
            paramNames={getComplexParams(this.props.paramNames)}
            handleChangeParamName={this.handleChangeParamName}
          />
        )
      default:
        return false
    }
  }

  render() {
    return (
      <div>
        <SelectField
          floatingLabelText="Rule Type"
          value={this.state.rule.type}
          onChange={this.handleRuleTypeChange}>
          {
            this.props.ruleTypes.map(ruleType => {
              return <MenuItem value={ruleType.value} primaryText={ruleType.value} key={ruleType.id}/>
            })
          }
        </SelectField>
        {this.section(this.state.rule.type)}
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

function mapStateToProps(state) {
  return {
    ruleTypes: state.ruleTypes.map(item => item),
    nameToFields: state.nameToFields.map(item => item),
    operators: state.operators.map(item => item),
    momentNames: state.momentNames.map(item => item),
    mappingNames: state.mappingNames.map(item => item),
    paramNames: state.paramNames.map(item => item),
    valueTypes: state.valueTypes.map(item => item),
    mappingPossibleValues: state.mappingPossibleValues.map(item => item),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateRule : (rule) => {
      dispatch(updateRule(rule))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Rule);
