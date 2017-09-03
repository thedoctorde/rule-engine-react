import React from 'react';
import {connect} from 'react-redux';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {numberize} from "../../../utils/helpers";
import * as actions from "../../../actions/subruleActions"

const deleteButtonStyle = {
  marginLeft: "auto",
  //display: "flex",
  alignSelf: "center",

};


const style = {
  display: "flex",
  alignItems: "start",
  alignContent: "center",
  //justifyContent: "space-between",
  padding: "5px 20px 15px",
  marginRight: 20,
  marginBottom: 10,
  marginTop: 10,
  backgroundColor: "#fff"
};

const subrulInsideStyle = {
  display: "flex",
  flexWrap: "wrap",
}

export class Subrule extends React.Component {

  handleChangeField = (event, index, value) => {
    let newState = Object.assign(
      {},
      this.props.subrule,
      {field: value}
    );
    this.props.updateSubrule(newState)
  };

  handleChangeOperator = (event, index, value) => {
    let newState = Object.assign(
      {},
      this.props.subrule,
      {operator: value}
    );
    this.props.updateSubrule(newState)
  };

  handleChangeValueType = (event, index, value) => {
    let newState = Object.assign(
      {},
      this.props.subrule,
      {value_type: value}
    );
    this.props.updateSubrule(newState)
  };

  handleChangeValue = (event, index, value) => {
    let newState = Object.assign(
      {},
      this.props.subrule,
      {value: value}
    );
    this.props.updateSubrule(newState)
  };

  handleChangeNumberValue = (event, value) => {
    let newState = Object.assign(
      {},
      this.props.subrule,
      {value: numberize(value)}
    );
    this.props.updateSubrule(newState)
  };

  handleChangeStringValue = (event, value) => {
    let newState = Object.assign(
      {},
      this.props.subrule,
      {value: value}
    );
    this.props.updateSubrule(newState)
  };

  handleChangeCategory = (event, value) => {
    let newState = Object.assign(
      {},
      this.props.subrule,
      {
        category: numberize(value, this.props.subrule.category),
      }
    );
    this.props.updateSubrule(newState)
  };

  handleChangeAppcount = (event, value) => {
    let newState = Object.assign(
      {},
      this.props.subrule,
      {
        appcount: numberize(value, this.props.subrule.appcount),
      }
    );
    this.props.updateSubrule(newState)
  };

  valueControl() {
    switch (this.props.subrule.value_type) {
      case "field":
        return (
          <SelectField
            floatingLabelText="Value"
            value={this.props.subrule.value}
            onChange={this.handleChangeValue}
          >
            {
              this.props.paramNames.map(item =>
                <MenuItem value={item.id} primaryText={item.id} key={item.id}/>
              )
            }
          </SelectField>
        )
      case "boolean":
        return (
          <SelectField
            floatingLabelText="Value"
            value={this.props.subrule.value}
            onChange={this.handleChangeValue}
          >
            {
              this.props.boolParams.map(item =>
                <MenuItem value={item.value} primaryText={item.id} key={item.id}/>
              )
            }
          </SelectField>);
      case "number":
        return (
          <TextField
            floatingLabelText="Value"
            value={this.props.subrule.value}
            onChange={this.handleChangeNumberValue}
          >
          </TextField>);
      case "string":
        return (
          <TextField
            floatingLabelText="Value"
            value={this.props.subrule.value}
            onChange={this.handleChangeStringValue}
          >
          </TextField>);
      case "value":
        switch (this.props.subrule.field) {
          case "category":
            return (
              <SelectField
                value={this.props.subrule.value}
                onChange={this.handleChangeValue}
                floatingLabelText="Value"
              >
                {
                  this.props.mappingPossibleValues
                    .map(item =>
                      <MenuItem value={item.id} primaryText={item.value} key={item.id}/>
                    )
                }

              </SelectField>
            );
          default:
            return false
        }
      default:
        return false
    }
  }

  render() {

    return (
      this.props.subrule ?
        <div style={style}>
          <div style={subrulInsideStyle}>
            <SelectField
              floatingLabelText="Field"
              value={this.props.subrule.field}
              onChange={this.handleChangeField}
            >
              {
                this.props.fields
                  .filter(item => item.name === this.props.parentRuleParamName)
                  .map(item =>
                    <MenuItem value={item.value} primaryText={item.value} key={item.id}/>
                  )
              }
            </SelectField>
            <SelectField
              floatingLabelText="Operator"
              value={this.props.subrule.operator}
              onChange={this.handleChangeOperator}
            >
              {
                this.props.operators.map(item =>
                  <MenuItem value={item.value} primaryText={item.value} key={item.id}/>
                )
              }
            </SelectField>
            <SelectField
              floatingLabelText="Value Type"
              value={this.props.subrule.value_type}
              onChange={this.handleChangeValueType}
            >
              {
                this.props.valueTypesForSubrules.map(item =>
                  <MenuItem value={item.id} primaryText={item.value} key={item.id}/>
                )
              }
            </SelectField>
            {this.valueControl()}
          </div>
          <RaisedButton
            label="Delete"
            secondary={true}
            style={deleteButtonStyle}
            onClick={() => {
              this.props.deleteSubrule(this.props.subrule.id, this.props.ruleId)
            }
            }/>
        </div>
        : false



    )
  }
}

function mapDispatchToProps(dispatch) {
  return {

    updateSubrule: (rule) => {
      dispatch(actions.updateSubrule(rule))

    },
  }
}

function mapStateToProps(state) {
  return {
    fields: state.fields.map(item => item),
    operators: state.operators.map(item => item),
    valueTypes: state.valueTypes.map(item => item),
    paramNames: state.paramNames.map(item => item),
    boolParams: state.boolParams.map(item => item),
    valueTypesForSubrules: state.valueTypesForSubrules.map(item => item),
    mappingPossibleValues: state.mappingPossibleValues.filter(item => item.type === "appToCategory").map(item => item)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Subrule);
