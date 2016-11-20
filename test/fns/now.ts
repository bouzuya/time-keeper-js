import * as assert from 'power-assert';
import * as sinon from 'sinon';
import { test, fixture } from '../';
import { now } from '../../src/fns/now';
import { toUNIXTime } from '../../src/fns/to-unix-time';
import {
  toTimeZoneOffsetString
} from '../../src/fns/to-time-zone-offset-string';

const category = 'fns/now > ';

test(category + 'Z', fixture({
  before() {
    const context = {
      original: Date.prototype.getTimezoneOffset
    };
    Date.prototype.getTimezoneOffset = () => 0;
    return context;
  },
  after(context: any) {
    Date.prototype.getTimezoneOffset = context.original;
  }
}, () => {
  const unixTime = Math.floor(new Date().getTime() / 1000);
  sinon.useFakeTimers(unixTime * 1000);
  const dt = now();
  assert(toUNIXTime(dt) === unixTime);
  assert(toTimeZoneOffsetString(dt) === 'Z');
}));

test(category + '+09:00', fixture({
  before() {
    const context = {
      original: Date.prototype.getTimezoneOffset
    };
    Date.prototype.getTimezoneOffset = () => -540;
    return context;
  },
  after(context: any) {
    Date.prototype.getTimezoneOffset = context.original;
  }
}, () => {
  const unixTime = Math.floor(new Date().getTime() / 1000);
  sinon.useFakeTimers(unixTime * 1000);
  const dt = now();
  assert(toUNIXTime(dt) === unixTime);
  assert(toTimeZoneOffsetString(dt) === '+09:00');
}));
