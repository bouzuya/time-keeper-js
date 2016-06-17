import * as assert from 'power-assert';
import { test } from './';
import { parseISOString } from '../src/';

test('get()', () => {
  const isoString = '2016-01-02T15:04:05-07:00';
  const dt = parseISOString(isoString);
  assert(dt.get('year') === 2016);
  assert(dt.get('month') === 1); // 1-12
  assert(dt.get('date') === 2);
  assert(dt.get('hour') === 15);
  assert(dt.get('minute') === 4);
  assert(dt.get('second') === 5);
  assert.throws(() => dt.get(<any>'day'));
});
