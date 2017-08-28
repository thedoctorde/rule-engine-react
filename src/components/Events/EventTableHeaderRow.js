import React, {Component} from 'react';
import {
  TableHeaderColumn,
  TableRow,
} from 'material-ui/Table';

class RulesTableHeaderRow extends Component {
  render() {
    return (
      <TableRow>
        <TableHeaderColumn>ID</TableHeaderColumn>
        <TableHeaderColumn>Moments</TableHeaderColumn>
        <TableHeaderColumn>Edit</TableHeaderColumn>
      </TableRow>
    );
  }
}

export default RulesTableHeaderRow;