import * as moment from 'moment';

export type ISOString = string; // '2016-01-02T15:04:05-07:00'
export type TimeZoneOffsetString = string; // '-07:00'
export type UNIXTime = number; // 1451772245

export interface DateTime {
  inTimeZone(timeZoneOffsetString: TimeZoneOffsetString): DateTime;
  toISOString(): ISOString;
  toTimeZoneOffsetString(): TimeZoneOffsetString;
  toUNIXTime(): UNIXTime;
}

export class DateTimeImpl implements DateTime {
  private dt: moment.Moment;

  static now(): DateTime {
    const isoString = moment().format();
    return new DateTimeImpl(isoString);
  }

  static parseISOString(isoString: ISOString): DateTime {
    return new DateTimeImpl(isoString);
  }

  static parseUNIXTime(unixTime: UNIXTime): DateTime {
    const dateValue = unixTime * 1000;
    const isoString = moment(dateValue).format();
    return new DateTimeImpl(isoString);
  }

  constructor(isoString: ISOString) {
    this.dt = moment.parseZone(isoString);
  }

  inTimeZone(timeZoneOffsetString: TimeZoneOffsetString): DateTime {
    const isoString = moment(this.dt).utcOffset(timeZoneOffsetString).format();
    return new DateTimeImpl(isoString);
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
