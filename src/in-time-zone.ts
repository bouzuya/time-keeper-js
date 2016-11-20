import { DateTime } from './types/date-time';
import { TimeZoneOffsetString } from './types/time-zone-offset-string';
import { parseTimeZoneOffset } from './_/parse-time-zone-offset';

const inTimeZone = (
  dt: DateTime, timeZoneOffset: TimeZoneOffsetString
): DateTime => {
  return {
    _t: dt._t,
    _z: parseTimeZoneOffset(timeZoneOffset)
  };
};

export { inTimeZone };
