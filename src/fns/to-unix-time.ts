import { DateTime } from '../types/date-time';
import { UNIXTime } from '../unix-time';

const toUNIXTime = (dt: DateTime): UNIXTime => {
  return dt._t;
};

export { toUNIXTime };
