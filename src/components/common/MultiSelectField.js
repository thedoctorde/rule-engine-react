import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default class MultiSelectField extends Component {
  state = {
    values: this.props.values,
  };

  handleChange = (event, index, values) => {
    return this.setState({values});
  };

  menuItems(values) {
    if (this.props.possibleValues) {
      return this.props.possibleValues.map((item) => (
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

  render() {
    const {values} = this.state;
    return (
      <SelectField
        multiple={true}
        hintText="Select"
        value={values}
        onChange={this.handleChange}
      >
        {this.menuItems(values)}
      </SelectField>
    );
  }
}