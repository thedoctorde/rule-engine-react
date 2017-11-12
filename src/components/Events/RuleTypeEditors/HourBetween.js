import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';

const wrapperStyle = {
  display: "flex",
  flexWrap: "wrap",
};
const arr = [{"value":0,"label":"00:00"},{"value":1,"label":"01:00"},{"value":2,"label":"02:00"},{"value":3,"label":"03:00"},{"value":4,"label":"04:00"},{"value":5,"label":"05:00"},{"value":6,"label":"06:00"},{"value":7,"label":"07:00"},{"value":8,"label":"08:00"},{"value":9,"label":"09:00"},{"value":10,"label":"10:00"},{"value":11,"label":"11:00"},{"value":12,"label":"12:00"},{"value":13,"label":"13:00"},{"value":14,"label":"14:00"},{"value":15,"label":"15:00"},{"value":16,"label":"16:00"},{"value":17,"label":"17:00"},{"value":18,"label":"18:00"},{"value":19,"label":"19:00"},{"value":20,"label":"20:00"},{"value":21,"label":"21:00"},{"value":22,"label":"22:00"},{"value":23,"label":"23:00"}];
const HourBetween = ({valueFrom, valueTo, handleChangeFrom, handleChangeTo}) => {
  return(
    <div style={wrapperStyle}>
      <SelectField
        floatingLabelText="From"
        value={valueFrom}
        onChange={handleChangeFrom}>
        {
          arr.map(item => {
          return <MenuItem value={item.value} primaryText={item.label} key={item.value}/>
        }) }
      </SelectField>
      <SelectField
        floatingLabelText="To"
        value={valueTo}
        onChange={handleChangeTo}>
        {
          arr.map(item => {
          return <MenuItem value={item.value} primaryText={item.label} key={item.value}/>
        }) }
      </SelectField>
    </div>
  )
};

export default HourBetween