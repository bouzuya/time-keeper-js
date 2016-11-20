import * as assert from 'power-assert';
import { test } from '../';
import { isLeapYear } from '../../src/fns/is-leap-year';

test('fns/is-leap-year', () => {
  assert(isLeapYear(2001) === false);
  assert(isLeapYear(2004) === true);
  assert(isLeapYear(2100) === false);
  assert(isLeapYear(2000) === true);
});
