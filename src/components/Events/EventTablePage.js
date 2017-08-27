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

    this.createEvent = this.createEvent.bind(this);
  }

  createEvent(event) {
    this.props.createEvent()
      // .then((eventId) => {
      //     this.redirect(eventId)
      //   }
      // )
      // .catch(error => {
      //   }
      // )
  }

  redirect(eventId) {
    this.context.router.push('/event/' + eventId);
  }

  render() {
    const {events} = this.props;
    return (
      <div>
        <RaisedButton label="Add new event"
                      onClick={this.createEvent}/>
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

EventsTablePage.contextTypes = {
  router: React.PropTypes.func.isRequired
}

function mapStateToProps(state, ownProps) {
  return {
    events: state.events,
    ruleTypes: state.ruleTypes
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createEvent: () => {
      dispatch(createEvent())
    },
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(EventsTablePage);