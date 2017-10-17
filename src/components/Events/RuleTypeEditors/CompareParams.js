import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';

const wrapperStyle = {
  display: "flex",
  flexWrap: "wrap",
};

const CompareParams = ({
                 param1, paramNames, handleChangeParam1,
                 param2, handleChangeParam2,
                 operator, operators, handleChangeOperator,
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
        floatingLabelText="Param1"
        value={param1}
        onChange={handleChangeParam1}>
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
          getOperators(operators, param1, paramNames).map(item =>
            <MenuItem value={item.value} primaryText={item.value} key={item.id}/>
          )
        }
      </SelectField>
      <SelectField
        floatingLabelText="Param2"
        value={param2}
        onChange={handleChangeParam2}>
        {
          paramNames.map(item =>
            <MenuItem value={item.id} primaryText={item.id} key={item.id}/>
          )
        }
      </SelectField>

    </div>
  )
};

export default CompareParams