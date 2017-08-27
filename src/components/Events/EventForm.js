import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Rule from "./Rule";
import Action from "./Action";

const style = {
  marginLeft: 12,
};
const wrapperStyle = {
  paddingLeft: 15,
  paddingRight: 15,
};

class EventForm extends Component {
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
        <h1>Rules</h1>
        <div >
          <RaisedButton label="Add new rule"
                        onClick={() => createRule(event.id)}/>
          <RaisedButton label="Save" style={style}
                        onClick={() => {
                          uploadEvents(event.id, store)
                        }}/>
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


        <h1>Actions</h1>
        <div >
          <RaisedButton label="Add new action"
                        onClick={() => createAction(event.id)}/>
          <RaisedButton label="Save" style={style}
                        onClick={() => {
                          uploadEvents(event.id, store)
                        }}/>
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
