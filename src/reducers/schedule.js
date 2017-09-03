import {TOGGLE_HOUR, TOGGLE_DAY_OF_WEEK, TOGGLE_SEARCH_BOUNDARY} from '../actions/schedule';

const intialState = {
  hours: [],
  dayOfWeek: [],
  searchBoundary: [],
}
export function schedule(state = intialState, action) {
  switch(action.type) {
    case TOGGLE_HOUR:
      const newState = Object.assign({}, state, {
        hours: Object.assign({}, state.hours, {
          [action.hour]: !state.hours[action.hour],
        }),
      });
      return Object.assign({}, state, newState);
    case TOGGLE_DAY_OF_WEEK:
      return Object.assign({}, state, {
        dayOfWeek: Object.assign({}, state.dayOfWeek, {
          [action.day]: !state.dayOfWeek[action.day],
        }),
      });
    case TOGGLE_SEARCH_BOUNDARY:
      return Object.assign({}, state, {
        searchBoundary: Object.assign({}, state.searchBoundary, {
          [action.boundary]: !state.searchBoundary[action.boundary],
        }),
      });
    default:
      return state;
  }
}

export default schedule;
