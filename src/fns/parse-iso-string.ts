import { DateTime2 } from '../date-time-2';
import { ISOString } from '../iso-string';
import { parseTimeZoneOffset } from '../parse-time-zone-offset';

const parseISOString = (s: ISOString): DateTime2 => {
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
