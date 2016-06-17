import * as moment from 'moment';
import { DateTime } from './date-time';
import { Field } from './field';
import { ISOString } from './iso-string';
import { TimeZoneOffsetString } from './time-zone-offset-string';
import { Unit } from './unit';
import { UNIXTime } from './unix-time';

export class DateTimeImpl implements DateTime {
  static now(): DateTime {
    const dt = moment();
    return new DateTimeImpl(dt);
  }

  static parseISOString(isoString: ISOString): DateTime {
    if (typeof isoString !== 'string') throw new Error();
    const p = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:Z|(?:[-+]\d{2}:\d{2}))$/;
    if (!isoString.match(p)) throw new Error();
    const dt = moment.parseZone(isoString);
    if (!dt.isValid()) throw new Error();
    return new DateTimeImpl(dt);
  }

  static parseUNIXTime(unixTime: UNIXTime): DateTime {
    const dateValue = unixTime * 1000;
    const dt = moment(dateValue);
    if (!dt.isValid()) throw new Error();
    return new DateTimeImpl(dt);
  }

  constructor(private dt: moment.Moment) {
    // do nothing
  }

  get(field: Field): number {
    const p = /^(?:year|month|date|hour|minute|second)$/;
    if (!field.match(p)) throw new Error();
    const n = this.dt.get(field);
    return field === 'month' ? n + 1 : n;
  }

  inTimeZone(timeZoneOffsetString: TimeZoneOffsetString): DateTime {
    const dt = moment(this.dt).utcOffset(timeZoneOffsetString);
    return new DateTimeImpl(dt);
  }

  plus(n: number, unit: Unit): DateTime {
    const p = /^(?:year|month|day|hour|minute|second)$/;
    if (!unit.match(p)) throw new Error();
    const dt = moment(this.dt).add(n, unit);
    return new DateTimeImpl(dt);
  }

  toISOString(): ISOString {
    return this.dt.format();
  }

  toString(): string {
    return this.toISOString();
  }

  toTimeZoneOffsetString(): TimeZoneOffsetString {
    return this.dt.format('Z');
  }

  toUNIXTime(): UNIXTime {
    return this.dt.unix();
  }
}