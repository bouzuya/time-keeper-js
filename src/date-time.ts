import { Field } from './field';
import { ISOString } from './iso-string';
import { TimeZoneOffsetString } from './time-zone-offset-string';
import { Unit } from './unit';
import { UNIXTime } from './unix-time';

export interface DateTime {
  get(field: Field): number;
  inTimeZone(timeZoneOffsetString: TimeZoneOffsetString): DateTime;
  plus(n: number, unit: Unit): DateTime;
  toISOString(): ISOString;
  toTimeZoneOffsetString(): TimeZoneOffsetString;
  toUNIXTime(): UNIXTime;
}
