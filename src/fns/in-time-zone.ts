import { DateTime2 } from '../date-time-2';
import { TimeZoneOffsetString } from '../time-zone-offset-string';
import { parseTimeZoneOffset } from '../parse-time-zone-offset';

const inTimeZone = (
  dt: DateTime2, timeZoneOffset: TimeZoneOffsetString
): DateTime2 => {
  return {
    _t: dt._t,
    _z: parseTimeZoneOffset(timeZoneOffset)
  };
};

export { inTimeZone };
