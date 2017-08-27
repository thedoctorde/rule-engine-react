import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const style = {
  display: "flex",
  alignItems: "start",
  alignContent: "center",
  //justifyContent: "space-between",
  paddingBottom: 10,
  borderBottom: "2px solid #eee"
};

const deleteButtonStyle = {
  marginLeft: "auto",
  marginRight: 12,
  display: "flex",
  alignSelf: "center",

};

export class Action extends React.Component {

  handleActionChange = (event, index, value) => {
    let newState = Object.assign(
      {},
      this.props.action,
      {
        action: value,
      }
    );
    this.props.updateAction(newState)
  };

  handleTypeChange = (event, index, value) => {
    let newState = Object.assign(
      {},
      this.props.action,
      {
        type: value,
      }
    );
    this.props.updateAction(newState)
  };

  handleMomentChange = (event, index, value) => {
    let newState = Object.assign(
      {},
      this.props.action,
      {
        moment: value,
      }
    );
    this.props.updateAction(newState)
  };

  handleExpireTypeChange = (event, index, value) => {
    let newState = Object.assign(
      {},
      this.props.action,
      {
        expire_type: value,
      }
    );
    this.props.updateAction(newState)
  };

  handleExpireChange = (event, value) => {
    let newState = Object.assign(
      {},
      this.props.action,
      {
        expire: value,
      }
    );
    this.props.updateAction(newState)
  };



  render() {
    const {eventId, deleteAction} = this.props;
    return (
      <div style={style}>

        <SelectField
          floatingLabelText="Action"
          value={this.props.action.action}
          onChange={this.handleActionChange}>
          {
            this.props.actionList.map(a => {
              return <MenuItem value={a.id} primaryText={a.value} key={a.id}/>
            })
          }
        </SelectField>

        <SelectField
          floatingLabelText="Type"
          value={this.props.action.type}
          onChange={this.handleTypeChange}>
          {
            this.props.actionTypes.map(a => {
              return <MenuItem value={a.id} primaryText={a.value} key={a.id}/>
            })
          }
        </SelectField>

        <SelectField
          floatingLabelText="Moment"
          value={this.props.action.moment}
          onChange={this.handleMomentChange}>
          {
            this.props.momentNames.map(a => {
              return <MenuItem value={a.id} primaryText={a.value} key={a.id}/>
            })
          }
        </SelectField>
        <TextField
          floatingLabelText="Expire"
          value={this.props.action.expire}
          onChange={this.handleExpireChange}
        />
        <SelectField
          floatingLabelText="Expire type"
          value={this.props.action.expire_type}
          onChange={this.handleExpireTypeChange}>
          {
            this.props.actionExpireTypes.map(a => {
              return <MenuItem value={a.value} primaryText={a.value} key={a.id}/>
            })
          }
        </SelectField>

        <RaisedButton
          label="Delete"
          secondary={true}
          style={deleteButtonStyle}
          onClick={() => {
            deleteAction(this.props.action.id, eventId)
          }
          }/>
      </div>
    );
  }
}


export default Action;
