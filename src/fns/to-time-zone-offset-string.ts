import { lpad } from '../lpad';
import { DateTime2 } from '../date-time-2';
import { TimeZoneOffsetString } from '../time-zone-offset-string';

const toTimeZoneOffsetString = (dt: DateTime2): TimeZoneOffsetString => {
  const z = dt._z;
  return [
    (z > 0 ? '-' : '+'),
    lpad(Math.abs(Math.floor(z / (60 * 60))).toString(), 2, '0'),
    ':',
    lpad(Math.abs(Math.floor(z % (60 * 60))).toString(), 2, '0')
  ].join('');
};

export { toTimeZoneOffsetString };
