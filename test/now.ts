import * as assert from 'power-assert';
import { test } from './';
import { now } from '../src/now';

test('now()', () => {
  assert(now());
});
