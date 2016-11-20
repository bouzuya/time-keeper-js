import { DateTime2 } from '../date-time-2';
import { UNIXTime } from '../unix-time';

const parseUNIXTime = (unixTime: UNIXTime): DateTime2 => {
  const date = new Date(unixTime * 1000);
  const time = Math.floor(date.getTime() / 1000);
  const zone = date.getTimezoneOffset() * 60;
  return { _t: time, _z: zone };
};

export { parseUNIXTime };
