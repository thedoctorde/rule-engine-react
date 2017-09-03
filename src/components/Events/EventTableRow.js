import React from 'react';
import {
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import {Link} from 'react-router-dom'
import Chip from 'material-ui/Chip';
import {green300, red300} from 'material-ui/styles/colors';

const momentsStyle = {
  display: "flex",
  flexWrap: "wrap",
};

const chipStyle = {
  marginRight: 5,
};

function getActions(event, actions, actionType) {
  let acts;
  let cr = [];
  if (event.actions && actions.length !== 0) {
    acts = event.actions.map(item => {
      let a = actions[item];
      if (a !== undefined) return a;
      else return
    });
    cr = acts.filter(item => item.action === actionType).map(item => {
      return {moment: item.moment, id: item.id}});
  }
  return cr;
}

const EventTableRow = ({event, actions, style}) => {
  return (
    <TableRow style={style}>
      <TableRowColumn>{event.id}</TableRowColumn>
      <TableRowColumn>
        <div style={momentsStyle}>
        {
          getActions(event, actions, "create").map(item =>
            <Chip backgroundColor={green300} style={chipStyle} key={item.id} >{item.moment}</Chip>
          )
        }
        {
          getActions(event, actions, "remove").map(item =>
            <Chip backgroundColor={red300} style={chipStyle} key={item.id}>{item.moment}</Chip>
          )
        }
        </div>
      </TableRowColumn>
      <TableRowColumn><Link to={"/ruleset/" + event.id}>Edit</Link></TableRowColumn>
    </TableRow>
  );
}

export default EventTableRow;
