import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import Subrule from "./Subrule";


const ComplexParam = ({
                        paramName, paramNames, handleChangeParamName,
                        subrules,
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
      {subrules
        ? subrules.map(item =>
          <Subrule name={paramName} subrule={item} key={item.id}/>)
        : false
      }
    </div>
  )
};

export default ComplexParam