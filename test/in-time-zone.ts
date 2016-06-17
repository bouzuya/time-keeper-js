import * as assert from 'power-assert';
import { test } from './';
import { parseISOString } from '../src/';

test('inTimeZone()', () => {
  const isoString = '2016-01-02T15:04:05-07:00';
  const dt = parseISOString(isoString);
  assert(dt.toTimeZoneOffsetString() === '-07:00');
});