export function schedule(state = {}, action) {
  switch(action.type) {
    case 'ADD_SCHEDULE':
      return Object.assign({}, state, {[action.hour]: true});
    default:
      return state;
  }
}

export default schedule;
