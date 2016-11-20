import * as assert from 'power-assert';
import { test } from '../';
import { now } from '../../src/fns/now';
import { inTimeZone } from '../../src/fns/in-time-zone';
import {
  toTimeZoneOffsetString
} from '../../src/fns/to-time-zone-offset-string';

test('fns/in-time-zone', () => {
  const local = now();
  const utc = inTimeZone(local, 'Z');
  assert(toTimeZoneOffsetString(utc) === 'Z');
  const utc2 = inTimeZone(local, '+00:00');
  assert(toTimeZoneOffsetString(utc2) === 'Z');
  const ja = inTimeZone(utc, '+09:00');
  assert(toTimeZoneOffsetString(ja) === '+09:00');
});
