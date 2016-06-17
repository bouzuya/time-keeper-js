import * as assert from 'power-assert';
import * as sinon from 'sinon';
import * as moment from 'moment';
import { test } from './';
import { now } from '../src/';

test('now()', () => {
  const unixTime = moment().unix();
  sinon.useFakeTimers(unixTime * 1000);
  const dt = now();
  assert(dt.toUNIXTime() === unixTime);
});
