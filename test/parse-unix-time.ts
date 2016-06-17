import * as assert from 'power-assert';
import * as moment from 'moment';
import { test } from './';
import { parseUNIXTime } from '../src/parse-unix-time';

test('parseUNIXTime()', () => {
  const unixTime = moment().unix();
  const dt = parseUNIXTime(unixTime);
  assert(dt.toUNIXTime() === unixTime);
});
