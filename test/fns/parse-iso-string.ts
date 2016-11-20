import * as assert from 'power-assert';
import { test } from '../';
import { parseISOString } from '../../src/fns/parse-iso-string';
import { toISOString } from '../../src/fns/to-iso-string';

test('fns/parse-iso-string', () => {
  const isoString = '2016-12-31T23:59:59+09:00';
  const dt = parseISOString(isoString);
  assert(toISOString(dt) === isoString);
});
