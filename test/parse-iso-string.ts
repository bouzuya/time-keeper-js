import * as assert from 'power-assert';
import * as sinon from 'sinon';
import { test } from './';
import { parseISOString } from '../src/parse-iso-string';

test('parseISOString()', () => {
  const isoString = '2016-01-02T15:04:05-07:00';
  const dt = parseISOString(isoString);
  assert(dt.toISOString() === isoString);
});
