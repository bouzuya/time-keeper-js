import { DateTime2 } from '../date-time-2';
import { UNIXTime } from '../unix-time';

const toUNIXTime = (dt: DateTime2): UNIXTime => {
  return dt._t;
};

export { toUNIXTime };
