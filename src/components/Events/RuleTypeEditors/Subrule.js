import React from 'react';
import {connect} from 'react-redux';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';

export class Subrule extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      operator: props.operator
    }
  }

  handleChangeOperator = (event, index, value) => this.setState({operator: value});
  handleChangeValueType = (event, index, value) => this.setState({valueType: value});

  render() {
    return(
      <div>
        <SelectField
          floatingLabelText="Operator"
          value={this.state.operator}
          onChange={this.handleChangeOperator}>
          {
            this.props.operators.map(item =>
              <MenuItem value={item.value} primaryText={item.value} key={item.id}/>
            )
          }
        </SelectField>
        <SelectField
          floatingLabelText="Value Type"
          value={this.state.valueType}
          onChange={this.handleChangeValueType}>
          {
            this.props.valueTypes.map(item =>
              <MenuItem value={item.value} primaryText={item.value} key={item.id}/>
            )
          }
        </SelectField>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    ruleTypes: state.ruleTypes.map(item => item),
    operators: state.operators.map(item => item),
    paramNames: state.paramNames.map(item => item),
    valueTypes: state.valueTypes.map(item => item),
  }
}

export default connect(mapStateToProps)(Subrule);
