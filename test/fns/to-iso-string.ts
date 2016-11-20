import * as assert from 'power-assert';
import { test } from '../';
import { parseUNIXTime } from '../../src/fns/parse-unix-time';
import { inTimeZone } from '../../src/fns/in-time-zone';
import { toISOString } from '../../src/fns/to-iso-string';

test('fns/to-iso-string', () => {
  // '2016-12-31T23:59:59+09:00'
  const local = parseUNIXTime(1483196399);
  const ja = inTimeZone(local, '+09:00');
  assert(toISOString(ja) === '2016-12-31T23:59:59+09:00');
});
