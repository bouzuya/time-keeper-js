import * as assert from 'power-assert';
import * as sinon from 'sinon';
import { test, fixture } from '../';
import { now } from '../../src/fns/now';
import {
  toTimeZoneOffsetString
} from '../../src/fns/to-time-zone-offset-string';

const category = 'fns/to-time-zone-offset-string > ';

test(category + '(offset -540) === "+09:00"', fixture({
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
  const dt = now();
  assert(toTimeZoneOffsetString(dt) === '+09:00');
}));


test(category + '(offset 0) === "Z"', fixture({
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
  const dt = now();
  assert(toTimeZoneOffsetString(dt) === 'Z');
}));
