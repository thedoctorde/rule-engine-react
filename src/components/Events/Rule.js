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

export class Rule extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      ruleType: props.rule.type,
      from: props.rule.min,
      to: props.rule.max,
      momentName: "",
      operator: "",
    };
  }

  handleRuleTypeChange = (event, index, value) => this.setState({ruleType: value});
  handleChangeFrom = (event, index, value) => this.setState({from: value});
  handleChangeTo = (event, index, value) => this.setState({to: value});
  handleChangeMomentName = (event, index, value) => this.setState({name: value});
  handleChangeOperator = (event, index, value) => this.setState({operator: value});
  handleChangeValueType = (event, index, value) => this.setState({valueType: value});
  handleChangeParamName = (event, index, value) => this.setState({paramName: value});
  handleChangeMappingName = (event, index, value) => this.setState({mappingName: value});

  section(ruleType) {
    switch (ruleType) {
      case "hour_between":
        return (
          <HourBetween
            valueFrom={this.state.from}
            valueTo={this.state.to}
            handleChangeFrom={this.handleChangeFrom}
            handleChangeTo={this.handleChangeTo}
          />
        );
      case "last_moments":
        return (
          <LastMoments
            momentName={this.state.momentName}
            momentNames={this.props.momentNames}
            operator={this.state.operator}
            operators={this.props.operators}
            handleChangeMomentName={this.handleChangeMomentName}
            handleChangeOperator={this.handleChangeOperator}
          />
        );
      case "param" :
        return (
          <Param
            paramName={this.state.paramName}
            paramNames={this.props.paramNames}
            handleChangeParamName={this.handleChangeParamName}
            operator={this.state.operator}
            operators={this.props.operators}
            handleChangeOperator={this.handleChangeOperator}
            valueType={this.state.valueType}
            valueTypes={this.props.valueTypes}
            handleChangeValueType={this.handleChangeValueType}
          />
        );
      case "old_vs_new":
        return (
          <OldVsNew
            paramName={this.state.paramName}
            paramNames={this.props.paramNames}
            handleChangeParamName={this.handleChangeParamName}
            operator={this.state.operator}
            operators={this.props.operators}
            handleChangeOperator={this.handleChangeOperator}
          />
        );
      case "mapping":
        return (
          <Mapping
            paramName={this.state.paramName}
            paramNames={this.props.paramNames}
            handleChangeParamName={this.handleChangeParamName}
            operator={this.state.operator}
            operators={this.props.operators}
            handleChangeOperator={this.handleChangeOperator}
            mappingName={this.state.mappingName}
            mappingNames={this.props.mappingNames}
            handleChangeMappingName={this.handleChangeMappingName}
            mappingValues={this.state.mappingValues}
            mappingPossibleValues={this.props.mappingPossibleValues}
          />
        );
      case "complex_param":
        return (
          <ComplexParam
            subrules={this.props.rule.rules}
            paramName={this.state.paramName}
            paramNames={this.props.paramNames}
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
          value={this.props.rule.type}
          onChange={this.handleRuleTypeChange}>
          {
            this.props.ruleTypes.map(ruleType => {
              return <MenuItem value={ruleType.value} primaryText={ruleType.value} key={ruleType.id}/>
            })
          }
        </SelectField>
        {this.section(this.state.ruleType)}
      </div>
    );
  }
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

export default connect(mapStateToProps)(Rule);
