import { DateTime2 } from '../date-time-2';
import { Field } from '../field';

const get = (dt: DateTime2, field: Field): number => {
  const date = new Date((dt._t - dt._z) * 1000);
  switch (field) {
    case 'year': return date.getUTCFullYear();
    case 'month': return date.getUTCMonth() + 1;
    case 'date': return date.getUTCDate();
    case 'hour': return date.getUTCHours();
    case 'minute': return date.getUTCMinutes();
    case 'second': return date.getUTCSeconds();
  }
};

export { get };
