import { lpad } from '../lpad';
import { DateTime } from '../date-time';
import { TimeZoneOffsetString } from '../time-zone-offset-string';

const toTimeZoneOffsetString = (dt: DateTime): TimeZoneOffsetString => {
  const z = dt._z;
  if (z === 0) return 'Z';
  return [
    (z > 0 ? '-' : '+'),
    lpad(Math.abs(Math.floor(z / (60 * 60))).toString(), 2, '0'),
    ':',
    lpad(Math.abs(Math.floor(z % (60 * 60))).toString(), 2, '0')
  ].join('');
};

export { toTimeZoneOffsetString };
