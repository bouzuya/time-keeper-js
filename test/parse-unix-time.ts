import * as assert from 'power-assert';
import * as moment from 'moment';
import { test } from './';
import { parseUNIXTime } from '../src/';

test('parseUNIXTime()', () => {
  const unixTime = moment().unix();
  const dt = parseUNIXTime(unixTime);
  assert(dt.toUNIXTime() === unixTime);
  assert.throws(() => parseUNIXTime(undefined));
});
