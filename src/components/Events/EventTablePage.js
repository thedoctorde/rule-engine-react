import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  Table,
  TableBody,
  TableHeader,
} from 'material-ui/Table';
import EventTableRow from './EventTableRow'
import RulesTableHeaderRow from "./EventTableHeaderRow";
import {createEvent} from "../../actions/eventActions"
import RaisedButton from 'material-ui/RaisedButton';

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
      <div>
      <RaisedButton label="Add new event"
                    onClick={() => this.props.createEvent()}/>
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
      </div>

    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    events: state.events,
    ruleTypes: state.ruleTypes
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createEvent: (eventId) => {
      dispatch(createEvent(eventId))
    },
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(EventsTablePage);