import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';


const CompareParams = ({
                 param1, paramNames, handleChangeParam1,
                 param2, handleChangeParam2,
                 operator, operators, handleChangeOperator,
               }) => {
  return (
    <div>
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
          operators.map(item =>
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