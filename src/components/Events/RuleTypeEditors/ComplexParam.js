import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import Subrule from "./Subrule";


const wrapperStyle = {
  display: "flex",
  flexWrap: "wrap",
};
const ComplexParam = ({
                        paramName, paramNames, handleChangeParamName,
                        subrules,
                      }) => {
  debugger;
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
      {subrules
        ? subrules.map(item =>
          <Subrule name={paramName} subrule={item} key={item.id}/>)
        : false
      }
    </div>
  )
};



export default ComplexParam