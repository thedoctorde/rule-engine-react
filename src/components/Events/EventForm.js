import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Rule from "./Rule";
import Action from "./Action";
import MultiSelectField from "../common/MultiSelectField";

const style = {
  marginLeft: 12,
};
const wrapperStyle = {
  paddingLeft: 15,
  paddingRight: 15,
};

class EventForm extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleChangeRunOn = this.handleChangeRunOn.bind(this)
  }

  handleChangeRunOn = (event, key, payload) => {
    let newState = Object.assign(
      {},
      this.props.event,
      {
        run_on: payload
      }
    );

    this.props.updateEvent(newState);
  };

  render() {
    const {
      event,
      ruleset,
      createRule,
      updateRule,
      deleteRule,
      uploadEvents,
      createSubrule,
      deleteSubrule,
      store,
      subrules,
      ruleTypes,
      nameToFields,
      operators,
      momentNames,
      mappingNames,
      paramNames,
      valueTypes,
      mappingPossibleValues,
      actions,
      actionList,
      actionTypes,
      actionExpireTypes,
      createAction,
      updateAction,
      deleteAction,
    } = this.props;
    return (

      <div style={wrapperStyle}>
        <RaisedButton
          label="Save"
          primary={true}
          style={style}
          onClick={() => {
            uploadEvents(event.id, store)
          }}/>
        <h2>Run on</h2>
        <div>
          <MultiSelectField
            values={event.run_on}
            possibleValues={paramNames}
            handleChange={this.handleChangeRunOn}
          />
        </div>
        <h2>Rules</h2>
        <div>
          <RaisedButton label="Add new rule"
                        onClick={() => createRule(event.id)}/>

        </div>
        {ruleset.map(item =>
          <Rule
            key={item.id}
            rule={item}
            updateRule={updateRule}
            deleteRule={deleteRule}
            createSubrule={createSubrule}
            deleteSubrule={deleteSubrule}
            eventId={event.id}
            ruleTypes={ruleTypes}
            subrules={subrules}
            nameToFields={nameToFields}
            operators={operators}
            momentNames={momentNames}
            mappingNames={mappingNames}
            paramNames={paramNames}
            valueTypes={valueTypes}
            mappingPossibleValues={mappingPossibleValues}
          />)
        }


        <h2>Actions</h2>
        <div>
          <RaisedButton label="Add new action"
                        onClick={() => createAction(event.id)}/>
        </div>
        {actions.map(item => {
          return <Action
            key={item.id}
            action={item}
            updateAction={updateAction}
            deleteAction={deleteAction}
            eventId={event.id}
            momentNames={momentNames}
            actionList={actionList}
            actionTypes={actionTypes}
            actionExpireTypes={actionExpireTypes}
          />
        })}


      </div>

    );
  }
}

export default EventForm;
