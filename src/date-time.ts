import * as moment from 'moment';

export type ISOString = string;

export interface DateTime {

}

export class DateTimeImpl implements DateTime {
  static now(): DateTime {
    return new DateTimeImpl(moment().format());
  }

  constructor(isoString: ISOString) {
    // TODO
  }
}
