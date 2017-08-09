import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  Table,
  TableBody,
  TableHeader,
} from 'material-ui/Table';
import EventTableRow from './EventTableRow'
import RulesTableHeaderRow from "./EventTableHeaderRow";

class EventsTablePage extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      events: Object.assign({}, props.events),
      errors: {}
    };
  }

  render() {
    const {events} = this.props;
    return (
      <Table
        selectable={true}>
        <TableHeader
          enableSelectAll={false}>
          <RulesTableHeaderRow/>
        </TableHeader>
        <TableBody>
          {
            Object.keys(events).map(key => events[key]).map(item =>
            <EventTableRow event={item} key={item.id}/>)}
        </TableBody>
      </Table>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    events: state.events,
    ruleTypes: state.ruleTypes
  };
}

export default connect(mapStateToProps)(EventsTablePage);