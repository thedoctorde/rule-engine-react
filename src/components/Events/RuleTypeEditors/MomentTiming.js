import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';

const wrapperStyle = {
  display: "flex",
  flexWrap: "wrap",
};

const MomentTiming = ({
                 name, moments, handleChangeName,
                 after, handleChangeAfter,
               }) => {
  return (
    <div style={wrapperStyle}>
      <SelectField
        floatingLabelText="Name"
        value={name}
        onChange={handleChangeName}>
        {
          moments.map(item =>
            <MenuItem value={item.id} primaryText={item.id} key={item.id}/>
          )
        }
      </SelectField>
      <SelectField
        floatingLabelText="After"
        value={after}
        onChange={handleChangeAfter}>
        {
          moments.map(item =>
            <MenuItem value={item.id} primaryText={item.id} key={item.id}/>
          )
        }
      </SelectField>

    </div>
  )
};

export default MomentTiming