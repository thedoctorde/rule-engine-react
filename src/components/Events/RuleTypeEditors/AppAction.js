import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import MultiSelectField from "../../common/MultiSelectField";


const wrapperStyle = {
  display: "flex",
  flexWrap: "wrap",
};

const AppAction = ({
                   paramName, paramNames, handleChangeParamName,
                   operator, operators, handleChangeOperator,
                   mappingValues, mappingPossibleValues, handleChangeMappingValues
                 }) => {
  return (
    <div style={wrapperStyle}>
      <SelectField
        floatingLabelText="Param name"
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
          getOperatorsForMapping(operators).map(operator =>
            <MenuItem value={operator.id} primaryText={operator.value} key={operator.id}/>
          )
        }
      </SelectField>
      <MultiSelectField
        values={mappingValues}
        possibleValues={mappingPossibleValues}
        handleChange={handleChangeMappingValues}
        floatingLabelText="Values"
      />
    </div>
  )
};

function getOperatorsForMapping(operators) {
  return operators.filter(item => (item.value === "in" || item.value === "not in"))
}

export default AppAction