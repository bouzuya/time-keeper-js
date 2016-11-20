import { DateTime } from './types/date-time';
import { get } from './get';
import { isLeapYear as isLeapYearSub } from './_/is-leap-year';

const isLeapYear = (dt: DateTime): boolean => {
  const year = get(dt, 'year');
  return isLeapYearSub(year);
};

export { isLeapYear };
