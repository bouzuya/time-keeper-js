import { DateTime } from '../date-time';
import { Field } from '../field';

const get = (dt: DateTime, field: Field): number => {
  const date = new Date((dt._t - dt._z) * 1000);
  switch (field) {
    case 'year': return date.getUTCFullYear();
    case 'month': return date.getUTCMonth() + 1;
    case 'date': return date.getUTCDate();
    case 'hour': return date.getUTCHours();
    case 'minute': return date.getUTCMinutes();
    case 'second': return date.getUTCSeconds();
    default: throw new Error();
  }
};

export { get };
