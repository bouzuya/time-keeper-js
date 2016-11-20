import { DateTime } from '../types/date-time';
import { ISOString } from '../types/iso-string';
import { parseTimeZoneOffset } from '../_/parse-time-zone-offset';

const parseISOString = (s: ISOString): DateTime => {
  const pattern = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}([+-]\d{2}:\d{2}|Z)$/;
  const match = s.match(pattern);
  if (match === null) throw new Error();
  const date = new Date(s);
  const ms = date.getTime();
  if (isNaN(ms)) throw new Error();
  const time = Math.floor(ms / 1000);
  const zone = parseTimeZoneOffset(match[1]);
  return { _t: time, _z: zone };
};

export { parseISOString };
