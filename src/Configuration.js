import React, { Component } from 'react';
import './Configuration.css';

class Configuration extends Component {
  render() {
    return (
      <div className="Configuration">
        <ul clasName="timetable">
          {[...Array(24).keys()].map((hour, idx) =>
            <li className="timeslot">{hour}:00</li>
          )}
        </ul>
        <h3>Configuration</h3>
      </div>
    );
  }
}

export default Configuration;
