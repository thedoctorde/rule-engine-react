import React from 'react';
import {
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import { Link } from 'react-router-dom'

const EventTableRow = ({event}) => {
    return (
          <TableRow>
            <TableRowColumn>{event.id}</TableRowColumn>
            <TableRowColumn>{event.name}</TableRowColumn>
            <TableRowColumn><Link to={"/event/" + event.id}>Edit</Link></TableRowColumn>
          </TableRow>
    );
}

export default EventTableRow;
