import * as assert from 'power-assert';
import { test } from './';
import { parseISOString } from '../src/parse-iso-string';
import { get } from '../src/get';

test('fns/get', () => {
  const dt = parseISOString('2006-01-02T15:04:05-07:00');
  assert(get(dt, 'year') === 2006);
  assert(get(dt, 'month') === 1); // 1-12
  assert(get(dt, 'date') === 2);
  assert(get(dt, 'hour') === 15);
  assert(get(dt, 'minute') === 4);
  assert(get(dt, 'second') === 5);
});
