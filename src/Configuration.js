import React, {Component} from 'react';
import {connect} from 'react-redux';
import DayOfWeek from './components/DayOfWeek';

import './Configuration.css';

import Timeslot from './components/Timeslot';

class Configuration extends Component {
  render() {
    const {schedule} = this.props;
    return (
      <div className="Configuration">
        <h1>Configuration</h1>
        <h3>Time</h3>
        <ul className="timetable">
          {[...Array(24).keys()].map((hour, idx) =>
 	    <Timeslot key={idx} hour={hour} schedule={schedule.hours[hour]} />
          )}
        </ul>
        <h3>Week of The Day</h3>
        <ul className="dayOfWeek">
          {[...Array(7).keys()].map((day, idx) =>
            <DayOfWeek key={idx} day={day+1} schedule={schedule.dayOfWeek[day+1]} />
          )}
        </ul>
        <h3>Search Boundary</h3>
        <fieldset>
          <input type="checkbox" value="friends" />Friends<br/>
          <input type="checkbox" value="department" />Department<br/>
          <input type="checkbox" value="school-or-company" />School or Company<br/>
        </fieldset>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    schedule: state.schedule,
  }
}

export default connect(mapStateToProps)(Configuration);
