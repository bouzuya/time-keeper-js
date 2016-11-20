import { TimeZoneOffsetString } from './time-zone-offset-string';

const parseTimeZoneOffset = (
  timeZoneOffsetString: TimeZoneOffsetString
): number => {
  if (timeZoneOffsetString === 'Z') return 0;
  const match = timeZoneOffsetString.match(/^([+-])(\d{2}):(\d{2})$/);
  if (match === null) throw new Error();
  const plus = match[1] === '+';
  const h = parseInt(match[2], 10);
  const m = parseInt(match[3], 10);
  return (plus ? -1 : 1) * (h * 60 + m) * 60;
};

export { parseTimeZoneOffset };
