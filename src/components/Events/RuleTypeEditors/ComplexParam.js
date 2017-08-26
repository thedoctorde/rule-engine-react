import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import Subrule from "./Subrule";
import RaisedButton from 'material-ui/RaisedButton';


const wrapperStyle = {
  display: "flex",
  flexWrap: "wrap",
};
const ComplexParam = ({
                        paramName, paramNames, handleChangeParamName,
                        subrules, allSubrules, ruleId,
                        createSubrule,
                        deleteSubrule,

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
      <RaisedButton label="Add new rule"
                    onClick={() => createSubrule(ruleId)}/>
      {subrules
        ? subrules.map(id =>
          <Subrule
            ruleId={ruleId}
            subrule={allSubrules[id]}
            deleteSubrule = {deleteSubrule}
            key={id}
          />)
        : false
      }
    </div>
  )
};


export default ComplexParam