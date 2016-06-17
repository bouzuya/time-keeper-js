import * as moment from 'moment';

export type ISOString = string;
export type UNIXTime = number;

export interface DateTime {
  toISOString(): ISOString;
  toUNIXTime(): UNIXTime;
}

export class DateTimeImpl implements DateTime {
  private dt: moment.Moment;

  static now(): DateTime {
    return new DateTimeImpl(moment().format());
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

  toISOString(): ISOString {
    return this.dt.format();
  }

  toUNIXTime(): UNIXTime {
    return this.dt.unix();
  }
}
