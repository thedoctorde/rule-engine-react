import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';

const wrapperStyle = {
  display: "flex",
  flexWrap: "wrap",
};

const Old = ({
                 paramName, paramNames, handleChangeParamName,
                 operator, operators, handleChangeOperator,
                 value, handleChangeValue

               }) => {
  function getParamType(paramName, paramNames) {
    let param = paramNames && paramNames.filter(item => item.id === paramName)[0];
    if (param !== undefined) {
      return param.valueType
    }
    return undefined
  }

  function getOperators(operators, paramName, paramNames) {
    let paramValue = getParamType(paramName, paramNames);
    if ( paramValue === "BoolParam") {
      return operators.filter(item => ["=", "!="].includes(item.id))
    } else if ( paramValue === "IntParam") {
      return operators.filter(item => ["=", "!=", ">", ">=", "<", "<="].includes(item.id))
    } else if (paramValue === "StringParam") {
      return operators.filter(item => ["=", "!=", "in", "not in"].includes(item.id))
    }
    return operators
  }

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
        onChange={handleChangeOperator}>
        {
          getOperators(operators, paramName, paramNames).map(item =>
            <MenuItem value={item.value} primaryText={item.value} key={item.id}/>
          )
        }
      </SelectField>
      <TextField
        floatingLabelText="Value"
        value={value}
        onChange={handleChangeValue}
      />
    </div>
  )
};

export default Old