import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import Subrule from "./Subrule";
import RaisedButton from 'material-ui/RaisedButton';


const wrapperStyle = {
  //display: "flex",
  //flexWrap: "wrap",
};

export class ComplexParam extends React.Component {
  constructor(props, context) {
    super(props, context);

    // this.getOperators = this.getOperators.bind(this)
    // this.getParamType = this.getParamType.bind(this)
    // this.valueControl = this.valueControl.bind(this)
    this.handleChangeName = this.props.handleChangeParamName//.bind(this)
  }
  handleChangeName (){

  }
  render() {
    const {
      paramName, paramNames, handleChangeParamName,
      subrules, allSubrules, ruleId,
      createSubrule,
      deleteSubrule,
    } = this.props;
    return (
      <div style={wrapperStyle}>
        <SelectField
          floatingLabelText="Name"
          value={paramName}
          //onChange={handleChangeParamName}>
          onChange={this.handleChangeName} >
          {
            paramNames
              .filter(item => item.ruleTypes.includes('complex_param'))
              .map(item =>
                <MenuItem value={item.id} primaryText={item.id} key={item.id}/>
              )
          }
        </SelectField>
        <div>
          <RaisedButton label="Add new subrule"
                        onClick={() => createSubrule(ruleId)}/>
        </div>
        {subrules ? <h3>Subrules</h3> : false}
        {subrules
          ? subrules.map(id =>
            <Subrule
              ruleId={ruleId}
              subrule={allSubrules[id]}
              deleteSubrule = {deleteSubrule}
              parentRuleParamName = {paramName}
              key={id}
            />)
          : false
        }
      </div>
    )
  }
}
// const ComplexParam = ({
//                         paramName, paramNames, handleChangeParamName,
//                         subrules, allSubrules, ruleId,
//                         createSubrule,
//                         deleteSubrule,
//
//                       }) => {
//
// };


export default ComplexParam