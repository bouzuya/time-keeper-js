import * as assert from 'power-assert';
import { test } from '../';
import { isLeapYear } from '../../src/fns/is-leap-year';
import { parseISOString } from '../../src/fns/parse-iso-string';

test('fns/is-leap-year', () => {
  assert(isLeapYear(parseISOString('2001-01-01T00:00:00Z')) === false);
  assert(isLeapYear(parseISOString('2004-01-01T00:00:00Z')) === true);
  assert(isLeapYear(parseISOString('2100-01-01T00:00:00Z')) === false);
  assert(isLeapYear(parseISOString('2000-01-01T00:00:00Z')) === true);
});
