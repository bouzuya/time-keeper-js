import { DateTime } from './date-time';
import { DateTimeImpl } from './date-time-impl';

const now = DateTimeImpl.now;
const parseISOString = DateTimeImpl.parseISOString;
const parseUNIXTime = DateTimeImpl.parseUNIXTime;

export { DateTime, now, parseISOString, parseUNIXTime };
