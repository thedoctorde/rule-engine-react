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
}

function getActions(event, actions, actionType) {
  let acts;
  let cr = [];
  if (event.actions && actions.length !== 0) {
    acts = event.actions.map(item => {
      let a = actions[item];
      if (a !== undefined) return a;
      else return
    });
    cr = acts.filter(item => item.action === actionType).map(item => item.moment);
  }
  return cr;
}

const EventTableRow = ({event, actions}) => {
  return (
    <TableRow>
      <TableRowColumn>{event.id}</TableRowColumn>
      <TableRowColumn>
        <div style={momentsStyle}>
        {
          getActions(event, actions, "create").map(item =>
            <Chip backgroundColor={green300} >{item}</Chip>
          )
        }
        {
          getActions(event, actions, "remove").map(item =>
            <Chip backgroundColor={red300}>{item}</Chip>
          )
        }
        </div>
      </TableRowColumn>
      <TableRowColumn><Link to={"/event/" + event.id}>Edit</Link></TableRowColumn>
    </TableRow>
  );
}

export default EventTableRow;
