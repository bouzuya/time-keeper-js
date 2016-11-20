import { DateTime } from '../types/date-time';
import { ISOString } from '../types/iso-string';
import { lpad } from '../_/lpad';
import { toTimeZoneOffsetString } from './to-time-zone-offset-string';

const toISOString = (dt: DateTime): ISOString => {
  const date = new Date((dt._t - dt._z) * 1000);
  const y = date.getUTCFullYear().toString();
  const mo = lpad((date.getUTCMonth() + 1).toString(), 2, '0');
  const dd = lpad(date.getUTCDate().toString(), 2, '0');
  const h = lpad(date.getUTCHours().toString(), 2, '0');
  const min = lpad(date.getUTCMinutes().toString(), 2, '0');
  const s = lpad(date.getUTCSeconds().toString(), 2, '0');
  const z = toTimeZoneOffsetString(dt);
  return [y, '-', mo, '-', dd, 'T', h, ':', min, ':', s, z].join('');
};

export { toISOString };
