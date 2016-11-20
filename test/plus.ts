import * as assert from 'power-assert';
import { test } from './';
import { parseISOString } from '../src/parse-iso-string';
import { plus } from '../src/plus';
import { toISOString } from '../src/to-iso-string';

const category = 'fns/plus > ';

test(category + '1 second', () => {
  const d1 = parseISOString('2006-01-02T15:04:05-07:00');
  const d2 = plus(d1, 1, 'second');
  assert(toISOString(d1) === '2006-01-02T15:04:05-07:00');
  assert(toISOString(d2) === '2006-01-02T15:04:06-07:00');
});

test(category + '60 seconds', () => {
  const d1 = parseISOString('2006-01-02T15:04:05-07:00');
  const d2 = plus(d1, 60, 'second');
  assert(toISOString(d1) === '2006-01-02T15:04:05-07:00');
  assert(toISOString(d2) === '2006-01-02T15:05:05-07:00');
});

test(category + '1 minute', () => {
  const d1 = parseISOString('2006-01-02T15:04:05-07:00');
  const d2 = plus(d1, 1, 'minute');
  assert(toISOString(d1) === '2006-01-02T15:04:05-07:00');
  assert(toISOString(d2) === '2006-01-02T15:05:05-07:00');
});

test(category + '60 minutes', () => {
  const d1 = parseISOString('2006-01-02T15:04:05-07:00');
  const d2 = plus(d1, 60, 'minute');
  assert(toISOString(d1) === '2006-01-02T15:04:05-07:00');
  assert(toISOString(d2) === '2006-01-02T16:04:05-07:00');
});

test(category + '1 hour', () => {
  const d1 = parseISOString('2006-01-02T15:04:05-07:00');
  const d2 = plus(d1, 1, 'hour');
  assert(toISOString(d1) === '2006-01-02T15:04:05-07:00');
  assert(toISOString(d2) === '2006-01-02T16:04:05-07:00');
});

test(category + '24 hours', () => {
  const d1 = parseISOString('2006-01-02T15:04:05-07:00');
  const d2 = plus(d1, 24, 'hour');
  assert(toISOString(d1) === '2006-01-02T15:04:05-07:00');
  assert(toISOString(d2) === '2006-01-03T15:04:05-07:00');
});

test(category + '1 day', () => {
  const d1 = parseISOString('2006-01-02T15:04:05-07:00');
  const d2 = plus(d1, 1, 'day');
  assert(toISOString(d1) === '2006-01-02T15:04:05-07:00');
  assert(toISOString(d2) === '2006-01-03T15:04:05-07:00');
});

test(category + '31 days', () => {
  const d1 = parseISOString('2006-01-02T15:04:05-07:00');
  const d2 = plus(d1, 31, 'day');
  assert(toISOString(d1) === '2006-01-02T15:04:05-07:00');
  assert(toISOString(d2) === '2006-02-02T15:04:05-07:00');
});

test(category + '1 month', () => {
  const d1 = parseISOString('2006-01-02T15:04:05-07:00');
  const d2 = plus(d1, 1, 'month');
  assert(toISOString(d1) === '2006-01-02T15:04:05-07:00');
  assert(toISOString(d2) === '2006-02-02T15:04:05-07:00');
});

test(category + '12 months', () => {
  const d1 = parseISOString('2006-01-02T15:04:05-07:00');
  const d2 = plus(d1, 12, 'month');
  assert(toISOString(d1) === '2006-01-02T15:04:05-07:00');
  assert(toISOString(d2) === '2007-01-02T15:04:05-07:00');
});

test(category + '(last day)', () => {
  const d1 = parseISOString('2006-01-31T15:04:05-07:00');
  const d2 = plus(d1, 1, 'month');
  assert(toISOString(d1) === '2006-01-31T15:04:05-07:00');
  assert(toISOString(d2) === '2006-02-28T15:04:05-07:00');
});

test(category + '1 year', () => {
  const d1 = parseISOString('2006-01-02T15:04:05-07:00');
  const d2 = plus(d1, 1, 'year');
  assert(toISOString(d1) === '2006-01-02T15:04:05-07:00');
  assert(toISOString(d2) === '2007-01-02T15:04:05-07:00');
});

test(category + '10 years', () => {
  const d1 = parseISOString('2006-01-02T15:04:05-07:00');
  const d2 = plus(d1, 10, 'year');
  assert(toISOString(d1) === '2006-01-02T15:04:05-07:00');
  assert(toISOString(d2) === '2016-01-02T15:04:05-07:00');
});

test(category + '(leap year)', () => {
  const d1 = parseISOString('2001-02-28T00:00:00+09:00');
  const d2 = plus(d1, 1, 'year');
  assert(toISOString(d1) === '2001-02-28T00:00:00+09:00');
  assert(toISOString(d2) === '2002-02-28T00:00:00+09:00');
  const d3 = parseISOString('2004-02-29T00:00:00+09:00');
  const d4 = plus(d3, 1, 'year');
  assert(toISOString(d3) === '2004-02-29T00:00:00+09:00');
  assert(toISOString(d4) === '2005-02-28T00:00:00+09:00');
  const d5 = parseISOString('1999-02-28T00:00:00+09:00');
  const d6 = plus(d5, 1, 'year');
  assert(toISOString(d5) === '1999-02-28T00:00:00+09:00');
  assert(toISOString(d6) === '2000-02-28T00:00:00+09:00');
});

test(category + 'invalid unit', () => {
  const isoString = '2006-01-02T15:04:05-07:00';
  const dt = parseISOString(isoString);
  assert.throws(() => plus(dt, 1, <any>'days'));
});
