import * as moment from 'moment';

export type ISOString = string; // '2016-01-02T15:04:05-07:00'
export type TimeZoneOffsetString = string; // '-07:00'
export type UNIXTime = number; // 1451772245

export interface DateTime {
  get(field: Field): number;
  inTimeZone(timeZoneOffsetString: TimeZoneOffsetString): DateTime;
  plus(n: number, unit: Unit): DateTime;
  toISOString(): ISOString;
  toTimeZoneOffsetString(): TimeZoneOffsetString;
  toUNIXTime(): UNIXTime;
}

export type Field = 'year' | 'month' | 'date' | 'hour' | 'minute' | 'second';

export type Unit = 'year' | 'month' | 'day' | 'hour' | 'minute' | 'second';

export class DateTimeImpl implements DateTime {
  static now(): DateTime {
    const dt = moment();
    return new DateTimeImpl(dt);
  }

  static parseISOString(isoString: ISOString): DateTime {
    const dt = moment.parseZone(isoString);
    return new DateTimeImpl(dt);
  }

  static parseUNIXTime(unixTime: UNIXTime): DateTime {
    const dateValue = unixTime * 1000;
    const dt = moment(dateValue);
    return new DateTimeImpl(dt);
  }

  constructor(private dt: moment.Moment) {
    // do nothing
  }

  get(field: Field): number {
    const n = this.dt.get(field);
    return field === 'month' ? n + 1 : n;
  }

  inTimeZone(timeZoneOffsetString: TimeZoneOffsetString): DateTime {
    const dt = moment(this.dt).utcOffset(timeZoneOffsetString);
    return new DateTimeImpl(dt);
  }

  plus(n: number, unit: Unit): DateTime {
    const dt = moment(this.dt).add(n, unit);
    return new DateTimeImpl(dt);
  }

  toISOString(): ISOString {
    return this.dt.format();
  }

  toTimeZoneOffsetString(): TimeZoneOffsetString {
    return this.dt.format('Z');
  }

  toUNIXTime(): UNIXTime {
    return this.dt.unix();
  }
}
