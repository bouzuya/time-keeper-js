import * as assert from 'power-assert';
import { test } from './';
import { parseISOString } from '../src/parse-iso-string';
import { toISOString } from '../src/to-iso-string';

const category = 'fns/parse-iso-string > ';

test(category + '+09:00', () => {
  const isoString = '2016-12-31T23:59:59+09:00';
  const dt = parseISOString(isoString);
  assert(toISOString(dt) === isoString);
});

test(category + '+00:00', () => {
  const isoString = '2016-12-31T23:59:59+00:00';
  const dt = parseISOString(isoString);
  assert(toISOString(dt) === '2016-12-31T23:59:59Z');
});

test(category + 'Z', () => {
  const isoString = '2016-12-31T23:59:59Z';
  const dt = parseISOString(isoString);
  assert(toISOString(dt) === isoString);
});

test(category + 'Error', () => {
  // assert.throws(() => parseISOString(undefined));
  assert.throws(() => parseISOString('2016-01-02T15:04:05-07:XX'));
  assert.throws(() => parseISOString('2016-99-02T15:04:05-07:00'));
});
