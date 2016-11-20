import * as assert from 'power-assert';
import * as sinon from 'sinon';
import { test } from './';
import { now } from '../src/now';
import { toUNIXTime } from '../src/to-unix-time';

test('fns/to-unix-time', () => {
  const unixTime = Math.floor(new Date().getTime() / 1000);
  sinon.useFakeTimers(unixTime * 1000);
  const dt = now();
  assert(toUNIXTime(dt) === unixTime);
});
