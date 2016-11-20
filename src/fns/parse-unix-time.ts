import { DateTime } from '../types/date-time';
import { UNIXTime } from '../types/unix-time';

const parseUNIXTime = (unixTime: UNIXTime): DateTime => {
  const date = new Date(unixTime * 1000);
  const time = Math.floor(date.getTime() / 1000);
  const zone = date.getTimezoneOffset() * 60;
  return { _t: time, _z: zone };
};

export { parseUNIXTime };
