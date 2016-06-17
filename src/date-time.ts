import * as moment from 'moment';

export type ISOString = string;

export interface DateTime {
  toISOString(): ISOString;
}

export class DateTimeImpl implements DateTime {
  private dt: moment.Moment;

  static now(): DateTime {
    return new DateTimeImpl(moment().format());
  }

  static parseISOString(isoString: ISOString): DateTime {
    return new DateTimeImpl(isoString);
  }

  constructor(isoString: ISOString) {
    this.dt = moment.parseZone(isoString);
  }

  toISOString(): ISOString {
    return this.dt.format();
  }
}
