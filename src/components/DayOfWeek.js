import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import {toggleDayOfWeek} from '../actions/schedule';

const DayOfWeek = ({day, schedule, onDayOfWeekClick}) => {
  return (
    <li onClick={() => onDayOfWeekClick(day)}>
      <div className="dayOfWeek">{moment().isoWeekday(day).format("dddd")}</div>
      <div className="schedule">{schedule ? 'scheduled' : ''}</div>
    </li>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    onDayOfWeekClick: day => {
      dispatch(toggleDayOfWeek(day))
    }
  }
};

export default connect(null, mapDispatchToProps)(DayOfWeek);
