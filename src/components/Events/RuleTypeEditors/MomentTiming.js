import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';


const MomentTiming = ({
                 paramName, paramNames, handleChangeParamName,
                 operator, operators, handleChangeOperator,
                 valueType, valueTypes, handleChangeValueType,
                 value, handleChangeValue

               }) => {
  return (
    <div>
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
      <SelectField
        floatingLabelText="Value Type"
        value={valueType}
        onChange={handleChangeValueType}>
        {
          valueTypes.map(item =>
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

export default Param