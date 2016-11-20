import { DateTime } from '../types/date-time';
import { Unit } from '../types/unit';
import { get } from './get';
import { parseISOString } from './parse-iso-string';
import { isLeapYear } from '../is-leap-year';

// days in month (common year)
const dm1 = [31, 28, 31, 30, 31, 30, 31, 30, 31, 30, 31];
// days in month (leap year)
const dm2 = [31, 29, 31, 30, 31, 30, 31, 30, 31, 30, 31];

const daysInMonth = (y: number, m: number): number => {
  return (isLeapYear(y) ? dm2 : dm1)[m - 1];
};

const dy1 = dm1.reduce((a, i) => a.concat([a[a.length - 1] + i]), [0]);
const dy2 = dm2.reduce((a, i) => a.concat([a[a.length - 1] + i]), [0]);

const dayOfYear = (y: number, m: number, d: number): number => {
  return (isLeapYear(y) ? dy2 : dy1)[m - 1] + d;
};

const days = (y: number, m: number, d: number): number => {
  const y1 = y - 1;
  return y1 * 365
    + Math.floor(y1 / 4) - Math.floor(y1 / 100) + Math.floor(y1 / 400)
    + dayOfYear(y, m, d) - 1;
};

const addMonth = (dt: DateTime, n: number): DateTime => {
  const y1 = get(dt, 'year');
  const m1 = get(dt, 'month');
  const d1 = get(dt, 'date');
  const days1 = days(y1, m1, d1);
  const y2 = y1 + Math.floor((m1 + n - 1) / 12);
  const m2 = Math.floor((m1 + n) % 12);
  const d2 = Math.min(d1, daysInMonth(y2, m2));
  const days2 = days(y2, m2, d2);
  const offset = (days2 - days1) * 24 * 60 * 60;
  return {
    _t: dt._t + offset,
    _z: dt._z
  };
};

const plus = (dt: DateTime, n: number, unit: Unit): DateTime => {
  const date = new Date((dt._t - dt._z) * 1000);
  switch (unit) {
    case 'year': return addMonth(dt, 12 * n);
    case 'month': return addMonth(dt, n);
    case 'day': return { _t: dt._t + n * 24 * 60 * 60, _z: dt._z };
    case 'hour': return { _t: dt._t + n * 60 * 60, _z: dt._z };
    case 'minute': return { _t: dt._t + n * 60, _z: dt._z };
    case 'second': return { _t: dt._t + n, _z: dt._z };
    default: throw new Error();
  }
};

export { plus };
