import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {numberize} from "../../utils/helpers";

const style = {
  display: "flex",
  alignItems: "start",
  alignContent: "center",
  //justifyContent: "space-between",
  padding: "5px 20px 15px",
  marginBottom: 10,
  marginTop: 10,
  backgroundColor: "#eee"
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
        expire: numberize(value, this.props.action.expire),
      }
    );
    this.props.updateAction(newState)
  };
  handleDelayTimeChange = (event, value) => {

    let newState = Object.assign(
      {},
      this.props.action,
      {
        delay_time: numberize(value, this.props.action.delay_time),
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
        {this.props.action.action === "create"
          ? <SelectField
            floatingLabelText="Type"
            value={this.props.action.type}
            onChange={this.handleTypeChange}>
            {
              this.props.actionTypes.map(a => {
                return <MenuItem value={a.id} primaryText={a.value} key={a.id}/>
              })
            }
          </SelectField>
          : false
        }
        {this.props.action.type === "delay"
          ? <TextField
            floatingLabelText="Delay time (minutes)"
            value={this.props.action.delay_time}
            onChange={this.handleDelayTimeChange}
          />
          : false
        }
        <SelectField
          floatingLabelText="Moment"
          value={this.props.action.moment}
          autoWidth={true}
          onChange={this.handleMomentChange}>
          {
            this.props.momentNames.map(a => {
              return <MenuItem value={a.id} primaryText={a.value + " (" + a.id + ")"} key={a.id}/>
            })
          }
        </SelectField>

        {this.props.action.action === "create" ?
          <SelectField
            floatingLabelText="Expire type"
            value={this.props.action.expire_type}
            onChange={this.handleExpireTypeChange}>
            {
              this.props.actionExpireTypes.map(a => {
                return <MenuItem value={a.id} primaryText={a.value} key={a.id}/>
              })
            }
          </SelectField>
          : false
        }
        {this.props.action.action === "create" ?
          <TextField
            floatingLabelText={this.props.action.expire_type === "expired_in" ? "Minutes" : "At hour"}
            value={this.props.action.expire}
            onChange={this.handleExpireChange}
          />
          : false
        }

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
