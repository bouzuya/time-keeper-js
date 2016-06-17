import { DateTime, DateTimeImpl } from './date-time';

const now = (): DateTime => DateTimeImpl.now();

export { now };
