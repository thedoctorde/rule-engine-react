import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';

const wrapperStyle = {
  display: "flex",
  flexWrap: "wrap",
};
const LastMoments = ({
                       name, momentNames, handleChangeName,
                       operator, operators, handleChangeOperator
                     }) => {
  return (
    <div style={wrapperStyle}>
      <SelectField
        floatingLabelText="Operator"
        value={operator}
        onChange={handleChangeOperator}>
        {
          operators
            .filter(item => (item.id === "in" || item.id === "not in"))
            .map(item => {
              return {
                id: item.id,
                value: item.id === "in" ? "contains" : "not contains"
              }
            })
            .map(item => {
              return <MenuItem value={item.value} primaryText={item.value} key={item.id}/>
            }
          )
        }
      </SelectField>
      <SelectField
        autoWidth={true}
        floatingLabelText="Name"
        value={name}
        onChange={handleChangeName}>
        {
          momentNames.map(item => {
              return <MenuItem value={item.id} primaryText={item.value + " (" + item.id + ")"} key={item.id}/>
            }
          )
        }
      </SelectField>

    </div>
  )
};

export default LastMoments