import * as assert from 'power-assert';
import { test } from './';
import { now, parseISOString, parseUNIXTime } from '../src/';

test('README example', () => {
  const dt1 = now();
  const dt2 = parseUNIXTime(dt1.toUNIXTime());
  assert(dt1.toString() === dt2.toString());

  const dt3 = parseISOString('2016-06-17T23:28:40+09:00');
  assert(dt3.get('year') === 2016);
  assert(dt3.get('month') === 6);
  assert(dt3.get('date') === 17);
  assert(dt3.get('hour') === 23);
  assert(dt3.get('minute') === 28);
  assert(dt3.get('second') === 40);
  assert(dt3.toTimeZoneOffsetString() === '+09:00');

  const dt4 = dt3.inTimeZone('+02:00');
  assert(dt3.toISOString() === '2016-06-17T23:28:40+09:00');
  assert(dt4.toISOString() === '2016-06-17T16:28:40+02:00');

  const dt5 = dt4.plus(2, 'day');
  assert(dt4.toISOString() === '2016-06-17T16:28:40+02:00');
  assert(dt5.toISOString() === '2016-06-19T16:28:40+02:00');
});
