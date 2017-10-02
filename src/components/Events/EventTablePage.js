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
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import toArray from "../../utils/helpers";

const topRowStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

};

const wrapperStyle = {
  padding: "20px",
};

const activeRowStyle = {
  background: "#fff",
};

const inactiveRowStyle = {
  background: "#eee",
};

const filterControlStyle = {
  display: "flex",
  alignItems: "center",
};

const showAllBtnStyle = {
  marginTop: 20,
  marginLeft: 20,
};

class EventsTablePage extends Component {
  constructor(props, context) {
    super(props, context);
    let events = Object.keys(this.props.events).map(key => this.props.events[key])
      .filter(item => item.isFetched);
    let propsActions = toArray(props.actions);
    events = events.map(e => {
      if (propsActions.length > 0) {
        let actions = props.events[e.id].actions.map(id => props.actions[id]);
        let actionMoments = actions.map(item => item.moment);
        let res = Object.assign({}, props.events[e.id], {actionMoments: actionMoments});
        return res
      }
      return props.events[e.id]
    });
    this.state = {
      allEvents: events,
      events: events,
      filterByMoment: "",
      showActiveOnly: true,
      showActiveOnlyBtnLabel: "Show all"
    };

    this.createEvent = this.createEvent.bind(this);
    this.redirect = this.redirect.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.showAll = this.showAll.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    let propsActions = toArray(nextProps.actions);
    let newEvents = Object.keys(nextProps.events).map(key => {
      if (propsActions.length > 0) {
        let actions = nextProps.events[key].actions.map(id => nextProps.actions[id]);
        let actionMoments = actions.map(item => item.moment);
        let res = Object.assign({}, nextProps.events[key], {actionMoments: actionMoments});
        return res
      }
      return nextProps.events[key]
    });

    if (this.state.filterByMoment) {
      newEvents = newEvents.filter(item => {
        return item.actionMoments && item.actionMoments.includes(this.props.filterByMoment)
      })
    }
    let newState = Object.assign(
      {},
      this.state,
      {
        allEvents: newEvents.filter(item => item.isFetched),
        events: newEvents.filter(item => item.isFetched)
      });
    this.setState(newState)
  }

  handleFilterChange = (event, index, value) => {
    let events = this.state.allEvents;
    if (value) {
      events = events.filter(item => item.actionMoments && item.actionMoments.includes(value))
    }
    let newState = Object.assign(
      {},
      this.state,
      {
        filterByMoment: value,
        events: events
      });
    this.setState(newState)
  };

  createEvent(event) {
    event.preventDefault();
    this.props.eventActions.createEvent()
      .then((event) => {
        this.redirect(event.id)
      })
      .catch()
  }

  showAll(event) {
    event.preventDefault();
    let newState = Object.assign({},
      this.state,
      {
        showActiveOnly: !this.state.showActiveOnly,
        showActiveOnlyBtnLabel: !this.state.showActiveOnly ? "Show all" : "Show active only"
      });
    this.setState(newState)
  }

  redirect(eventId) {
    this.context.router.history.push('/ruleset/' + eventId);
  }

  render() {
    const {actions} = this.props;
    const {events} = this.state;
    return (
      <div style={wrapperStyle}>
        <div style={topRowStyle}>
          <RaisedButton label="Add new ruleset"
                        onClick={this.createEvent}/>
          <div style={filterControlStyle}>
            <SelectField
              floatingLabelText="Filter rulesets"
              value={this.state.filterByMoment}
              onChange={this.handleFilterChange}>
              <MenuItem value={null} primaryText=""/>
              {
                this.props.momentNames.map(item => {
                  return <MenuItem value={item.id} primaryText={item.value + " (" + item.id + ")"} key={item.id}/>
                })
              }
            </SelectField>
            <RaisedButton
              style={showAllBtnStyle}
              label={this.state.showActiveOnlyBtnLabel}
              primary="true"
              onClick={this.showAll}/>
          </div>
        </div>
        <Table
          selectable={true}>
          <TableHeader
            enableSelectAll={false}>
            <RulesTableHeaderRow/>
          </TableHeader>
          <TableBody>
            {
              events.filter(item => item.active || (!item.active && !this.state.showActiveOnly)).map(item => {
                  let style;
                  item.active ? style = activeRowStyle : style = inactiveRowStyle;
                  return (<EventTableRow event={item} key={item.id} actions={actions} style={style}/>)
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
    ruleTypes: state.ruleTypes,
    momentNames: state.momentNames,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    eventActions: bindActionCreators(eventActions, dispatch)
  };

}


export default connect(mapStateToProps, mapDispatchToProps)(EventsTablePage);