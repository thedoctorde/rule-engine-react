import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Rule from "./Rule";
import Action from "./Action";
import MultiSelectField from "../common/MultiSelectField";
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import { withRouter } from 'react-router-dom'
import Snackbar from 'material-ui/Snackbar';

const addButtonStyle = {
  marginBottom: 15,
};
const saveButtonStyle = {
  marginTop: 15,
}
const backButtonStyle = {
  marginRight: 12,
  display: "flex",
  alignSelf: "center",
}
const wrapperStyle = {
  padding: "20px",
};
const topRowStyle = {
  display: "flex",
  flexWrap: "wrap",
}
const idStyle = {
  margin: "0px",
  alignSelf: "center",
  lineHeight: "36px",
}
const infoHeaderStyle = {
  marginBottom: 5,
}

const BackButton = withRouter(({history}) => (
  <RaisedButton
    label="Back"
    style={backButtonStyle}
    secondary={true}
    onClick={()=>{
      history.push('/')}}
  />
))

class EventForm extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {open: false, message:"", errors:[]};

    this.handleChangeRunOn = this.handleChangeRunOn.bind(this);

    this.uploadEvents = this.uploadEvents.bind(this);

    this.validate = this.validate.bind(this);
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
    let x =  Number(value);
    if ( isNaN(x)) {
      x = this.props.event.priority
    }
    let newState = Object.assign(
      {},
      this.props.event,
      {
        //todo make validation
        priority: x,
      }
    );
    this.props.updateEvent(newState)
  };

  validate = () => {
    this.state.errors = [];
    //run_on
    if (this.props.event.run_on === undefined || (this.props.event.run_on && this.props.event.run_on.length === 0)) {
      this.state.errors[this.state.errors.length] = "'Run_on' should be selected"
    }

    if (this.props.event.active === undefined) {
      this.state.errors[this.state.errors.length] = "'Active' should be selected"
    }

    if (this.props.event.priority === undefined) {
      this.state.errors[this.state.errors.length] = "'Priority' should be selected"
    }


    if (this.props.event.ruleset && this.props.event.ruleset.length === 0) {
      this.state.errors[this.state.errors.length] = "Add 1 or more rules"
    }
    if (this.props.ruleset.length > 0) {
      let ruleErrors = [];
      for (var rule of this.props.ruleset) {
        if (rule.type === undefined) {
          ruleErrors.push("You have to choose type of rule")
        } else {
          if (rule.type === "param") {
            if (rule.name === undefined) ruleErrors.push("Simple param rule: name is empty");
            if (rule.operator === undefined) ruleErrors.push("Simple param rule: operator is empty");
            if (rule.value === undefined) ruleErrors.push("Simple param rule: value is empty");
          }
          if (rule.type === "app_action") {
            if (rule.name === undefined) ruleErrors.push("App action rule: name is empty");
            if (rule.operator === undefined) ruleErrors.push("App action rule: operator is empty");
            if (rule.value === undefined || rule.value.length === 0) ruleErrors.push("App action rule: values is empty");
          }
          if (rule.type === "app_category") {
            if (rule.name === undefined) ruleErrors.push("App category rule: name is empty");
            if (rule.operator === undefined) ruleErrors.push("App category rule: operator is empty");
            if (rule.value === undefined || rule.value.length === 0) ruleErrors.push("App category rule: values is empty");
          }
          if (rule.type === "old_vs_new") {
            if (rule.name === undefined) ruleErrors.push("Old vs new rule: name is empty");
            if (rule.operator === undefined) ruleErrors.push("Old vs new rule: operator is empty");
          }
          if (rule.type === "old") {
            if (rule.name === undefined) ruleErrors.push("Old rule: name is empty");
            if (rule.operator === undefined) ruleErrors.push("Old rule: operator is empty");
            if (rule.value === undefined || rule.value.length === 0) ruleErrors.push("Old rule: value is empty");
          }
          if (rule.type === "hour_between") {
            if (rule.min === undefined) ruleErrors.push("Between hours rule: FROM is empty");
            if (rule.max === undefined) ruleErrors.push("Between hours rule: TO is empty");
          }
          if (rule.type === "last_moments") {
            if (rule.name === undefined) ruleErrors.push("Last moments rule: name is empty");
            if (rule.operator === undefined) ruleErrors.push("Last moments rule: operator is empty");
          }
          if (rule.type === "moment_timing") {
            if (rule.name === undefined) ruleErrors.push("Moment timing rule: name is empty");
            if (rule.after === undefined) ruleErrors.push("Moment timing rule: after is empty");
          }
          if (rule.type === "compare_params") {
            if (rule.param1 === undefined) ruleErrors.push("Compare params rule: param1 is empty");
            if (rule.operator === undefined) ruleErrors.push("Compare params rule: operator is empty");
            if (rule.param2 === undefined) ruleErrors.push("Compare params rule: param2 is empty");
          }
        }
      }
      if (ruleErrors.length > 0) {
        for (var err of ruleErrors) {
          this.state.errors[this.state.errors.length] = err
        }
      }
    }

    if (this.props.event.actions && this.props.event.actions.length === 0) {
      this.state.errors[this.state.errors.length] = "Add 1 or more actions"
    }

    if (this.props.actions.length > 0) {
      let actionErrors = [];
      for (let action of this.props.actions) {
        if (action.action === undefined) {
          actionErrors.push("Action is missing")
        } else {
          if (action.action === "create") {
            if (action.type === undefined) actionErrors.push("Create action: type is empty");
            if (action.type === "delay") {
              if (action.delay_time === undefined) actionErrors.push("Create action: delay time is empty")
            }
            if (action.moment === undefined) actionErrors.push("Create action: moment is empty");
            if (action.expire_type === undefined) actionErrors.push("Create action: expire time is empty");
            if (action.expire === undefined) actionErrors.push("Create action: last field is empty");
          }
          if (action.action === "remove") {
            if (action.moment === undefined) actionErrors.push("Remove action: moment is empty");
          }
          if (action.action === "cancel") {
            if (action.moment === undefined) actionErrors.push("Cancel action: moment is empty");
          }
        }
      }
      if (actionErrors.length > 0) {
        for (var err of actionErrors) {
          this.state.errors[this.state.errors.length] = err
        }
      }
    }

    if (this.state.errors && this.state.errors.length > 0) {
      return false;
    }

    return true;
  };

  uploadEvents(event) {
    event.preventDefault();
    if (this.validate()) {
      this.props.uploadEvent(this.props.event.id, this.props.store)
        .then(() => {
          this.setState({
            message: "Ruleset saved successfully",
            open: true,
            errors:[],
          });
        })
    } else {
      this.setState({
        errors: this.state.errors,
        message: this.state.errors.join("\n"),
        open:true,
      })
    }
  }

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    const {
      event,
      ruleset,
      createRule,
      updateRule,
      deleteRule,
      createSubrule,
      deleteSubrule,
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
      boolParams,
    } = this.props;
    return (

      <div style={wrapperStyle}>

        {this.props.event ?
          <div>
            <div style={topRowStyle}>

              <BackButton/>

              <h3 style={idStyle}>
                ID: {this.props.event.id}
              </h3>
            </div>
            <h2 style={infoHeaderStyle}>Info</h2>
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
            boolParams={boolParams}
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

        <RaisedButton
          label="Save"
          primary={true}
          style={saveButtonStyle}
          onClick={this.uploadEvents}
          // onClick={() => {
          //   uploadEvents(event.id, store)
          // }}
        />
        <Snackbar
          open={this.state.open}
          message={this.state.message}
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
          //contentstyle={this.alertBodyStyle}
          bodyStyle={{ height: 'auto', lineHeight: '28px', padding: 24, whiteSpace: 'pre-line' }}
        />
      </div>

    );
  }
}

export default EventForm;
