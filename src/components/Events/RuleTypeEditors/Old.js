import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';

const wrapperStyle = {
  display: "flex",
  flexWrap: "wrap",
};

export class Old extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.getOperators = this.getOperators.bind(this)
    this.getParamType = this.getParamType.bind(this)
    this.valueControl = this.valueControl.bind(this)
  }

  valueControl() {
    switch (this.props.operator) {
      case "in":
      case"not in":
        return (
          <TextField
            floatingLabelText="Values"
            value={this.props.value
              ? this.props.value.constructor === Array
                ? this.props.value.join(",")
                : [this.props.value]
              : ""}
            onChange={this.props.handleChangeArrayValue}
          />
        );
      default:
        if (this.getParamType() === "BoolParam") {
          return (
            <SelectField
              floatingLabelText="Value"
              value={this.props.value}
              onChange={this.props.handleChangeSelectValue}
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
            value={this.props.value}
            onChange={(event,value) => {
              return this.props.handleChangeValue(event,value, this.getParamType())
            }}
          />
        )
    }
  }

  getParamType() {
    let param = this.props.paramNames.filter(item => item.id === this.props.paramName)[0];
    if (param !== undefined) {
      return this.props.paramNames.filter(item => item.id === this.props.paramName)[0].valueType
    }
    return undefined
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
    const {
      paramName, paramNames, handleChangeParamName,
      operator, operators, handleChangeOperator,
    } = this.props;


    return (
      <div style={wrapperStyle}>

        <SelectField
          floatingLabelText="Name"
          value={paramName}
          onChange={handleChangeParamName}>
          {
            paramNames.map(item =>
              <MenuItem value={item.id} primaryText={item.id} key={item.id}/>
            )
          }
        </SelectField>
        <SelectField
          floatingLabelText="Operator"
          value={operator}
          onChange={handleChangeOperator}
          disabled={paramName === "" || paramName === null }
        >
          {
            this.getOperators(operators).map(item =>
              <MenuItem value={item.value} primaryText={item.value} key={item.id}/>
            )
          }
        </SelectField>
        {this.valueControl()}

      </div>
    )
  }
}
// const Old = ({
//                  paramName, paramNames, handleChangeParamName,
//                  operator, operators, handleChangeOperator,
//                  value, handleChangeValue
//
//                }) => {
//   function getParamType(paramName, paramNames) {
//     let param = paramNames && paramNames.filter(item => item.id === paramName)[0];
//     if (param !== undefined) {
//       return param.valueType
//     }
//     return undefined
//   }
//
//   function getOperators(operators, paramName, paramNames) {
//     let paramValue = getParamType(paramName, paramNames);
//     if ( paramValue === "BoolParam") {
//       return operators.filter(item => ["=", "!="].includes(item.id))
//     } else if ( paramValue === "IntParam") {
//       return operators.filter(item => ["=", "!=", ">", ">=", "<", "<="].includes(item.id))
//     } else if (paramValue === "StringParam") {
//       return operators.filter(item => ["=", "!=", "in", "not in"].includes(item.id))
//     }
//     return operators
//   }
//
//   return (
//     <div style={wrapperStyle}>
//
//       <SelectField
//         floatingLabelText="Operator"
//         value={operator}
//         onChange={handleChangeOperator}>
//         {
//           getOperators(operators, paramName, paramNames).map(item =>
//             <MenuItem value={item.value} primaryText={item.value} key={item.id}/>
//           )
//         }
//       </SelectField>
//       <TextField
//         floatingLabelText="Value"
//         value={value}
//         onChange={handleChangeValue}
//       />
//     </div>
//   )
// };

export default Old