import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const MultiSelectField = ({values, possibleValues, handleChange, floatingLabelText}) => {
  function menuItems() {
    if (possibleValues) {
      return possibleValues.map((item) => (
        <MenuItem
          key={item.id}
          insetChildren={true}
          checked={values && values.indexOf(item.id) > -1}
          value={item.id}
          primaryText={item.value}
        />
      ));
    }
  }

  return(
    <SelectField
      multiple={true}
      hintText="Select"
      value={values}
      onChange={handleChange}
      floatingLabelText={floatingLabelText}
    >
      {menuItems(values)}
    </SelectField>
  )
}

export default MultiSelectField