import { DateTime, DateTimeImpl } from './date-time';

const now = DateTimeImpl.now;
const parseISOString = DateTimeImpl.parseISOString;
const parseUNIXTime = DateTimeImpl.parseUNIXTime;

export { DateTime, now, parseISOString, parseUNIXTime };
