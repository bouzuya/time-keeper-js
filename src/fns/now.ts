import { DateTime2 } from '../date-time-2';

const now = (): DateTime2 => {
  const date = new Date();
  const time = Math.floor(date.getTime() / 1000);
  const zone = date.getTimezoneOffset() * 60;
  return { _t: time, _z: zone };
};

export { now };
