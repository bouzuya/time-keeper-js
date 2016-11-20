import { DateTime2 } from '../date-time-2';
import { ISOString } from '../iso-string';
import { lpad } from '../lpad';
import { toTimeZoneOffsetString } from './to-time-zone-offset-string';

const toISOString = (dt: DateTime2): ISOString => {
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
