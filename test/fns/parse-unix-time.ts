import * as assert from 'power-assert';
import { test } from '../';
import { parseUNIXTime } from '../../src/fns/parse-unix-time';
import { toUNIXTime } from '../../src/fns/to-unix-time';

test('fns/parse-unix-time', () => {
  const unixTime = Math.floor(new Date().getTime() / 1000);
  const dt = parseUNIXTime(unixTime);
  assert(toUNIXTime(dt) === unixTime);
});
