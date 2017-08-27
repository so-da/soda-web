import React, {Component} from 'react';
import {connect} from 'react-redux';

import './Configuration.css';

import Timeslot from './components/Timeslot';

class Configuration extends Component {
  render() {
    const {schedule} = this.props;
    return (
      <div className="Configuration">
        <ul className="timetable">
          {[...Array(24).keys()].map((hour, idx) =>
 	    <Timeslot key={idx} hour={hour} schedule={schedule[hour]} />
          )}
        </ul>
        <h3>Configuration</h3>
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
