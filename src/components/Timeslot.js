import React from 'react';
import {connect} from 'react-redux';
import {toggleHour} from '../actions/schedule';

let Timeslot = ({ schedule, hour, onTimeslotClick }) => {
  return (
    <li className="timeslot" onClick={() => onTimeslotClick(hour)}>
      <div className="hour">{hour}:00</div>
      <div className="schedule">{schedule ? 'scheduled' : ''}</div>
    </li>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    onTimeslotClick: id => {
      dispatch(toggleHour(id))
    }
  }
}

export default connect(null, mapDispatchToProps)(Timeslot);
