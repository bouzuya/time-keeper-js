import * as assert from 'power-assert';
import { test } from './';
import { parseISOString } from '../src/';

test('parseISOString()', () => {
  const isoString = '2016-01-02T15:04:05-07:00';
  const dt = parseISOString(isoString);
  assert(dt.toISOString() === isoString);
  assert.throws(() => parseISOString(undefined));
  assert.throws(() => parseISOString('2016-01-02T15:04:05-07:XX'));
  assert.throws(() => parseISOString('2016-99-02T15:04:05-07:00'));
});
