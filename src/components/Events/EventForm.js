import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Rule from "./Rule";

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
      store,
      subrules,
      ruleTypes,
      nameToFields,
      operators,
      momentNames,
      mappingNames,
      paramNames,
      valueTypes,
      mappingPossibleValues
    } = this.props;
    return (
      <div style={wrapperStyle}>
        id: {event.id}
        name: {event.name}

        <h1>Rules</h1>
        {ruleset.map(item =>
          <Rule
            key={item.id}
            rule={item}
            updateRule={updateRule}
            deleteRule={deleteRule}
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
        <RaisedButton label="Add new rule"
                      onClick={() => createRule(event.id)}/>
        <RaisedButton label="Save" style={style}
                      onClick={() => {
                        uploadEvents(event.id, store)
                      }}/>
      </div>

    );
  }
}

export default EventForm;
