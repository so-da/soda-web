const ADD_SCHEDULE = 'ADD_SCHEDULE';

export function addSchedule(hour) {
  return {
    type: ADD_SCHEDULE,
    hour,
  };   
}
