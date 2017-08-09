import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import MultiSelectField from "../../common/MultiSelectField";


const Mapping = ({
                   paramName, paramNames, handleChangeParamName,
                   operator, operators, handleChangeOperator,
                   mappingName, mappingNames, handleChangeMappingName,
                   mappingValues, mappingPossibleValues
                 }) => {
  return (
    <div>
      <SelectField
        floatingLabelText="Param name"
        value={paramName}
        onChange={handleChangeParamName}>
        {
          paramNames.map(item =>
            <MenuItem value={item.value} primaryText={item.value} key={item.id}/>
          )
        }
      </SelectField>
      <SelectField
        floatingLabelText="Operator"
        value={operator}
        onChange={handleChangeOperator}>
        {
          operators.map(operator =>
            <MenuItem value={operator.value} primaryText={operator.value} key={operator.id}/>
          )
        }
      </SelectField>
      <SelectField
        floatingLabelText="Mapping name"
        value={mappingName}
        onChange={handleChangeMappingName}>
        {
          mappingNames.map(item =>
            <MenuItem value={item.value} primaryText={item.value} key={item.id}/>
          )
        }
      </SelectField>
      <MultiSelectField
        values={mappingValues}
        possibleValues={mappingPossibleValues}/>
    </div>
  )
};

export default Mapping