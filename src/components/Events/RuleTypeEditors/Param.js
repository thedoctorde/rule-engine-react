import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import MultiSelectField from "../../common/MultiSelectField";


const wrapperStyle = {
  display: "flex",
  flexWrap: "wrap",
};

const Param = ({
                 paramName, paramNames, handleChangeParamName,
                 operator, operators, handleChangeOperator,
                 value, handleChangeValue, handleChangeArrayValue

               }) => {

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
          operators.map(item =>
            <MenuItem value={item.value} primaryText={item.value} key={item.id}/>
          )
        }
      </SelectField>

      {(operator === "in" || operator === "not in")
        ?
        <TextField
          floatingLabelText="Array"
          value={value}
          onChange={handleChangeArrayValue}
        />
        :
        <TextField
          floatingLabelText="Value"
          value={value}
          onChange={handleChangeValue}
        />
      }

    </div>
  )
};

export default Param