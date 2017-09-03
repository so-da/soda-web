export const TOGGLE_HOUR = 'TOGGLE_HOUR';
export const TOGGLE_DAY_OF_WEEK = 'TOGGLE_DAY_OF_WEEK';
export const TOGGLE_SEARCH_BOUNDARY = 'TOGGLE_SEARCH_BOUNDARY';

export function toggleHour(hour) {
  return { type: TOGGLE_HOUR, hour };
}

export function toggleDayOfWeek(day) {
  return { type: TOGGLE_DAY_OF_WEEK, day };
}

export function toggleSearchBoundary(boundary) {
  return { type: TOGGLE_SEARCH_BOUNDARY, boundary };
}
