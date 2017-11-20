import React from 'react';
import {connect} from 'react-redux';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {numberize, typize} from "../../../utils/helpers";
import * as actions from "../../../actions/subruleActions"
import MultiSelectField from "../../common/MultiSelectField";

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

  constructor(props, context) {
    super(props, context);

    this.getOperators = this.getOperators.bind(this);
    this.getParamType = this.getParamType.bind(this);
    this.valueControl = this.valueControl.bind(this);
  }

  handleChangeField = (event, index, value) => {
    let newState = Object.assign(
      {},
      this.props.subrule,
      {
        field: value,
        operator: "",
        value_type: "",
        value: "",
      }

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
      {value: typize(value)}
    );
    this.props.updateSubrule(newState)
  };

  handleChangeArrayValue = (event, value) => {
    let newState = Object.assign(
      {},
      this.props.subrule,
      {value: value.replace(", ", ",").replace(" ,", ",").split(',').map(item => typize(item))}
    );
    this.props.updateSubrule(newState);
  };

  handleChangeTypedValue = (event, value, type) => {
    let oldValue = typize(this.props.subrule.value, type);
    let newValue = typize(value, type);
    let newState = Object.assign(
      {},
      this.props.subrule,
      {
        value: newValue !== null ? newValue :
          oldValue !== null ? oldValue : "",
      }
    );
    this.props.updateSubrule(newState);
  };

  handleChangeSelectValue = (event, index, value) => {
    let newState = Object.assign(
      {},
      this.props.subrule,
      {
        value: value,
      }
    );
    this.props.updateSubrule(newState);
  };

  getParamType() {
    let param = this.props.fields.filter(item => item.value === this.props.subrule.field)[0];
    if (param !== undefined) {
      return this.props.fields.filter(item => item.value === this.props.subrule.field)[0].valueType
    }
    return undefined
  }


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
        );
      case "bool":
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
      case "int":
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
        let multipleValues = false;
        let type = this.getParamType()
        switch (this.props.subrule.operator) {
          case "in":
          case"not in":
            multipleValues = true;
            break;
          default:
            break;
        }
        if (type === "BoolParam") {
          return (
            <SelectField
              floatingLabelText="Value"
              value={this.props.subrule.value}
              onChange={this.handleChangeSelectValue}
            >
              {
                this.props.boolParams.map(item =>
                  <MenuItem value={item.value} primaryText={item.id} key={item.id}/>
                )
              }
            </SelectField>
          )
        }
        return (
          <TextField
            floatingLabelText="Value"
            value={this.props.subrule.value}
            onChange={(event,value) => {
              return this.handleChangeTypedValue(event,value, type)
            }}
          />
        )
        // switch (this.props.subrule.field) {
        //   case "category":
        //     if (this.props.subrule.operator === "in" || this.props.subrule.operator === "not in") {
        //       return(
        //         <MultiSelectField
        //           values={this.props.subrule.value}
        //           possibleValues={this.props.mappingPossibleValues}
        //           handleChange={this.handleChangeValue}
        //           floatingLabelText="Values"
        //         />
        //       )
        //     } else {
        //       return (
        //         <SelectField
        //           value={this.props.subrule.value}
        //           onChange={(event, index, value) => {
        //             this.handleChangeValue(event, index, value);
        //           }}
        //           floatingLabelText="Value"
        //         >
        //           {
        //             this.props.mappingPossibleValues
        //               .map(item =>
        //                 <MenuItem value={item.id} primaryText={item.value} key={item.id}/>
        //               )
        //           }
        //
        //         </SelectField>
        //       );
        //     }
        //   case "appcount":
        //     return(
        //       <TextField
        //         floatingLabelText="Value"
        //         value={this.props.subrule.value}
        //         onChange={multipleValues ? this.handleChangeArrayValue : this.handleChangeStringValue}
        //       >
        //       </TextField>
        //     );
        //   default:
        //     return (
        //       <TextField
        //         floatingLabelText="Value"
        //         value={this.props.subrule.value}
        //         onChange={multipleValues ? this.handleChangeArrayValue : this.handleChangeStringValue}
        //       >
        //       </TextField>);
        // }
      default:
        return false
    }
  }

  getOperators(operators) {
    let paramValue = this.getParamType()
    if ( paramValue === "BoolParam") {
      return operators.filter(item => item.id === "=")
    } else if ( paramValue === "IntParam") {
      return operators.filter(item => ["=", "!=", ">", ">=", "<", "<="].includes(item.id))
    } else if (paramValue === "StringParam") {
      return operators.filter(item => ["=", "!=", "in", "not in"].includes(item.id))
    }
    return operators
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
                this.getOperators(this.props.operators).map(item =>
                  <MenuItem value={item.value} primaryText={item.value} key={item.id}/>)
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
