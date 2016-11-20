import * as assert from 'power-assert';
import { test } from '../';
import { inTimeZone } from '../../src/fns/in-time-zone';
import { parseISOString } from '../../src/fns/parse-iso-string';
import { toISOString } from '../../src/fns/to-iso-string';
import {
  toTimeZoneOffsetString
} from '../../src/fns/to-time-zone-offset-string';

test('fns/in-time-zone', () => {
  const isoString = '2006-01-02T15:04:05-07:00';
  const dt = parseISOString(isoString);
  assert(toISOString(dt) === '2006-01-02T15:04:05-07:00');
  assert(toTimeZoneOffsetString(dt) === '-07:00');
  const utc = inTimeZone(dt, 'Z');
  assert(toISOString(utc) === '2006-01-02T22:04:05Z');
  assert(toTimeZoneOffsetString(utc) === 'Z');
  const utc2 = inTimeZone(dt, '+00:00');
  assert(toISOString(utc2) === '2006-01-02T22:04:05Z');
  assert(toTimeZoneOffsetString(utc2) === 'Z');
  const ja = inTimeZone(utc, '+09:00');
  assert(toISOString(ja) === '2006-01-03T07:04:05+09:00');
  assert(toTimeZoneOffsetString(ja) === '+09:00');
});
