import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';

const wrapperStyle = {
  display: "flex",
  flexWrap: "wrap",
};
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
const HourBetween = ({valueFrom, valueTo, handleChangeFrom, handleChangeTo}) => {
  return(
    <div style={wrapperStyle}>
      <SelectField
        floatingLabelText="From"
        value={valueFrom}
        onChange={handleChangeFrom}>
        {
          arr.map(hour => {
          return <MenuItem value={hour} primaryText={hour+""} key={hour+""}/>
        }) }
      </SelectField>
      <SelectField
        floatingLabelText="To"
        value={valueTo}
        onChange={handleChangeTo}>
        {
          arr.map(hour => {
          return <MenuItem value={hour} primaryText={hour+""} key={hour+""}/>
        }) }
      </SelectField>
    </div>
  )
};

export default HourBetween