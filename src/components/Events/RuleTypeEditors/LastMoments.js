import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';

const LastMoments = ({
                       name, momentNames, handleChangeName,
                       operator, operators, handleChangeOperator
                     }) => {
  return (
    <div>
      <SelectField
        floatingLabelText="Name"
        value={name}
        onChange={handleChangeName}>
        {
          momentNames.map(item => {
              return <MenuItem value={item.id} primaryText={item.value + "(" + item.id + ")"} key={item.id}/>
            }
          )
        }
      </SelectField>
      <SelectField
        floatingLabelText="Operator"
        value={operator}
        onChange={handleChangeOperator}>
        {
          operators.map(item => {
              return <MenuItem value={item.value} primaryText={item.value} key={item.id}/>
            }
          )
        }
      </SelectField>
    </div>
  )
};

export default LastMoments