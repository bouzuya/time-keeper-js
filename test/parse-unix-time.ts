import * as assert from 'power-assert';
import { test } from './';
import { parseUNIXTime } from '../src/parse-unix-time';
import { toUNIXTime } from '../src/to-unix-time';

test('fns/parse-unix-time', () => {
  const unixTime = Math.floor(new Date().getTime() / 1000);
  const dt = parseUNIXTime(unixTime);
  assert(toUNIXTime(dt) === unixTime);
  // assert.throws(() => parseUNIXTime(undefined));
});
