import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';

const wrapperStyle = {
  display: "flex",
  flexWrap: "wrap",
};
const HourBetween = ({valueFrom, valueTo, handleChangeFrom, handleChangeTo}) => {
  return(
    <div style={wrapperStyle}>
      <SelectField
        floatingLabelText="From"
        value={valueFrom}
        onChange={handleChangeFrom}>
        {[...Array(23).keys()].map(hour => {
          return <MenuItem value={hour} primaryText={hour} key={hour}/>
        }) }
      </SelectField>
      <SelectField
        floatingLabelText="To"
        value={valueTo}
        onChange={handleChangeTo}>
        {
          [...Array(23).keys()].map(hour => {
            return <MenuItem value={hour} primaryText={hour} key={hour}/>
          })
        }
      </SelectField>
    </div>
  )
};

export default HourBetween