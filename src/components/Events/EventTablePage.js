import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  Table,
  TableBody,
  TableHeader,
} from 'material-ui/Table';
import EventTableRow from './EventTableRow'
import RulesTableHeaderRow from "./EventTableHeaderRow";
import * as eventActions from "../../actions/eventActions";
import {bindActionCreators} from 'redux';
import RaisedButton from 'material-ui/RaisedButton';

const wrapperStyle = {
  padding: "20px"
};

const activeRowStyle = {
  background: "#fff"
};

const inactiveRowStyle = {
  background: "#eee"
};

class EventsTablePage extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      events: Object.assign({}, props.events),
      errors: {}
    };

    this.createEvent = this.createEvent.bind(this);
    this.redirect = this.redirect.bind(this);
  }

  createEvent(event) {
    event.preventDefault();
    this.props.eventActions.createEvent()
      .then((event) => {
        console.log("this:", this);
        this.redirect(event.id)
      })
      .catch(err => {
          console.log("err: ", err)
        }
      )
  }

  redirect(eventId) {
    this.context.router.history.push('/event/' + eventId);
  }

  render() {
    const {events, actions} = this.props;
    return (
      <div style={wrapperStyle}>
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
              Object.keys(events).map(key => events[key]).map(item => {
                let style;
                item.active ? style = activeRowStyle : style = inactiveRowStyle;
                return (<EventTableRow event={item} key={item.id} actions={actions} style = {style}/>)

              }
                )
            }
          </TableBody>
        </Table>
      </div>

    );
  }
}

EventsTablePage.contextTypes = {
  router: React.PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    events: state.events,
    actions: state.actions,
    ruleTypes: state.ruleTypes
  };
}

function mapDispatchToProps(dispatch) {
  return {
    eventActions: bindActionCreators(eventActions, dispatch)
  };
  // return {
  //   createEvent: () => {
  //     dispatch(createEvent())
  //   },
  // }
}


export default connect(mapStateToProps, mapDispatchToProps)(EventsTablePage);