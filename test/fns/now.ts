import * as assert from 'power-assert';
import * as sinon from 'sinon';
import { test } from '../';
import { now } from '../../src/fns/now';
import { toUNIXTime } from '../../src/fns/to-unix-time';

test('fns/now', () => {
  const unixTime = Math.floor(new Date().getTime() / 1000);
  sinon.useFakeTimers(unixTime * 1000);
  const dt = now();
  assert(toUNIXTime(dt) === unixTime);
});
