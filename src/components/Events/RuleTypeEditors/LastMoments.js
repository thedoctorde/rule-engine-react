import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';

const LastMoments = ({momentName, momentNames, operator, operators, handleChangeMomentName, handleChangeOperator}) => {
  return(
    <div>
      <SelectField
        floatingLabelText="Name"
        value={momentName}
        onChange={handleChangeMomentName}>
        {
          momentNames.map(item => {
              return <MenuItem value={item.value} primaryText={item.value + "(" + item.id +")"} key={item.id}/>
            }
          )
        }
      </SelectField>
      <SelectField
        id="operator"
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