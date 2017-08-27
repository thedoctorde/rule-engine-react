import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Rule from "./Rule";
import Action from "./Action";
import MultiSelectField from "../common/MultiSelectField";
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';

const addButtonStyle = {
  marginBottom: 15,
};
const wrapperStyle = {
  paddingLeft: 15,
  paddingRight: 15,
};

const topRowStyle = {
  display: "flex",
  flexWrap: "wrap",
}

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

  handleChangeActive = (event, index, value) => {
    let newState = Object.assign(
      {},
      this.props.event,
      {active: value}
    );
    this.props.updateEvent(newState)
  };

  handleChangePriority = (event, value) => {
    let newState = Object.assign(
      {},
      this.props.event,
      {
        priority: value,
      }
    );
    this.props.updateEvent(newState)
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
      boolParams,
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
          onClick={() => {
            uploadEvents(event.id, store)
          }}/>
        {this.props.event ?
          <div style={topRowStyle}>
            <div>
              <MultiSelectField
                floatingLabelText="Run on"
                values={event.run_on}
                possibleValues={paramNames}
                handleChange={this.handleChangeRunOn}
              />

            </div>
            <div>
              <SelectField
                floatingLabelText="Active"
                value={event.active}
                onChange={this.handleChangeActive}
              >
                {
                  this.props.boolParams.map(item =>
                    <MenuItem value={item.value} primaryText={item.id} key={item.id}/>
                  )
                }
              </SelectField>
            </div>
            <div>
              <TextField
                floatingLabelText="priority"
                value={this.props.event.priority}
                onChange={this.handleChangePriority}
              />
            </div>
          </div>
          : false
        }
        <h2>Rules</h2>
        <div>
          <RaisedButton
            label="Add new rule"
            style={addButtonStyle}
            onClick={() => createRule(event.id)}
          />

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
          <RaisedButton
            label="Add new action"
            style={addButtonStyle}
            onClick={() => createAction(event.id)}
          />
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
