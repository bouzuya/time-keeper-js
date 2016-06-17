import * as assert from 'power-assert';
import { test } from './';
import { parseISOString } from '../src/';

test('plus()', () => {
  const isoString = '2016-01-02T15:04:05-07:00';
  const dt = parseISOString(isoString);
  assert(dt.plus(1, 'year').toISOString() === '2017-01-02T15:04:05-07:00');
  assert(dt.plus(1, 'month').toISOString() === '2016-02-02T15:04:05-07:00');
  assert(dt.plus(1, 'day').toISOString() === '2016-01-03T15:04:05-07:00');
  assert(dt.plus(1, 'hour').toISOString() === '2016-01-02T16:04:05-07:00');
  assert(dt.plus(1, 'minute').toISOString() === '2016-01-02T15:05:05-07:00');
  assert(dt.plus(1, 'second').toISOString() === '2016-01-02T15:04:06-07:00');
});
