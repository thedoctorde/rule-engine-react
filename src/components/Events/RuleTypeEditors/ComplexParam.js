import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import Subrule from "./Subrule";
import RaisedButton from 'material-ui/RaisedButton';


const wrapperStyle = {
  //display: "flex",
  //flexWrap: "wrap",
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
          paramNames
            .filter(item => item.ruleTypes.includes('complex_param'))
            .map(item =>
            <MenuItem value={item.id} primaryText={item.id} key={item.id}/>
          )
        }
      </SelectField>
      <div>
      <RaisedButton label="Add new subrule"
                    onClick={() => createSubrule(ruleId)}/>
      </div>
      {subrules ? <h3>Subrules</h3> : false}
      {subrules
        ? subrules.map(id =>
          <Subrule
            ruleId={ruleId}
            subrule={allSubrules[id]}
            deleteSubrule = {deleteSubrule}
            parentRuleParamName = {paramName}
            key={id}
          />)
        : false
      }
    </div>
  )
};


export default ComplexParam