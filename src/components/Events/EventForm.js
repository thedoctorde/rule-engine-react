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

    if (this.props.event.actions && this.props.event.actions.length === 0) {
      this.state.errors[this.state.errors.length] = "Add 1 or more actions"
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
