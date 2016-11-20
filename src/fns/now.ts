import { DateTime } from '../date-time';

const now = (): DateTime => {
  const date = new Date();
  const time = Math.floor(date.getTime() / 1000);
  const zone = date.getTimezoneOffset() * 60;
  return { _t: time, _z: zone };
};

export { now };
