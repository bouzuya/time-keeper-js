import * as assert from 'power-assert';
import { test } from './';

import { get } from '../src/get';
import { inTimeZone } from '../src/in-time-zone';
import { isLeapYear } from '../src/is-leap-year';
import { now } from '../src/now';
import { parseISOString } from '../src/parse-iso-string';
import { parseUNIXTime } from '../src/parse-unix-time';
import { plus } from '../src/plus';
import { toISOString } from '../src/to-iso-string';
import { toTimeZoneOffsetString } from '../src/to-time-zone-offset-string';
import { toUNIXTime } from '../src/to-unix-time';

test('README example', () => {
  const dt1 = now();
  const dt2 = parseUNIXTime(toUNIXTime(dt1));
  assert(toUNIXTime(dt1) === toUNIXTime(dt2));

  const dt3 = parseISOString('2006-06-17T23:28:40+09:00');
  assert(get(dt3, 'year') === 2006);
  assert(get(dt3, 'month') === 6);
  assert(get(dt3, 'date') === 17);
  assert(get(dt3, 'hour') === 23);
  assert(get(dt3, 'minute') === 28);
  assert(get(dt3, 'second') === 40);
  assert(toTimeZoneOffsetString(dt3) === '+09:00');
  assert(isLeapYear(dt3) === false);

  const dt4 = inTimeZone(dt3, '+02:00');
  assert(toISOString(dt3) === '2006-06-17T23:28:40+09:00');
  assert(toISOString(dt4) === '2006-06-17T16:28:40+02:00');

  const dt5 = plus(dt4, 2, 'day');
  assert(toISOString(dt4) === '2006-06-17T16:28:40+02:00');
  assert(toISOString(dt5) === '2006-06-19T16:28:40+02:00');
});
