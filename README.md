# TimeKeeper.js

A simple date-time library.

## Features

- simple api
    - no support milliseconds.
    - no support day of weeks.
    - no support DST: daylight saving time (summer time).
    - no flexible formatter.
    - no invalid state.
    - no mutable state.
- typescript support

## Installation

```
$ npm install time-keeper
```

## Example

```ts
import * as assert from 'assert';
import {
  get,
  inTimeZone,
  isLeapYear,
  now,
  parseISOString,
  parseUNIXTime,
  plus,
  toISOString,
  toTimeZoneOffsetString,
  toUNIXTime
} from 'time-keeper';

// You can also use import by function.
// import { get } from 'time-keeper/get';
// import { inTimeZone } from 'time-keeper/in-time-zone';
// import { isLeapYear } from 'time-keeper/is-leap-year';
// import { now } from 'time-keeper/now';
// import { parseISOString } from 'time-keeper/parse-iso-string';
// import { parseUNIXTime } from 'time-keeper/parse-unix-time';
// import { plus } from 'time-keeper/plus';
// import { toISOString } from 'time-keeper/to-iso-string';
// import { toTimeZoneOffsetString } from 'time-keeper/to-time-zone-offset-string';
// import { toUNIXTime } from 'time-keeper/to-unix-time';

const dt1 = now();
const dt2 = parseUNIXTime(toUNIXTime(dt1));
assert(toUNIXTime(dt1) === toUNIXTime(dt2));

const dt3 = parseISOString('2006-06-17T23:28:40+09:00');
assert(get(dt3, 'year') === 2006);
assert(get(dt3, 'month') === 6);
assert(get(dt3, 'date') === 17);
assert(get(dt3, 'hour') === 23);
assert(get(dt3, 'minute') === 28);
assert(get(dt3, 'second') === 40);
assert(toTimeZoneOffsetString(dt3) === '+09:00');
assert(isLeapYear(dt3) === false);

const dt4 = inTimeZone(dt3, '+02:00');
assert(toISOString(dt3) === '2006-06-17T23:28:40+09:00');
assert(toISOString(dt4) === '2006-06-17T16:28:40+02:00');

const dt5 = plus(dt4, 2, 'day');
assert(toISOString(dt4) === '2006-06-17T16:28:40+02:00');
assert(toISOString(dt5) === '2006-06-19T16:28:40+02:00');
```

See: [`src/`](src/).

## Badges

[![npm version][npm-badge-url]][npm-url]
[![Circle CI][circleci-badge-url]][circleci-url]

[npm-badge-url]: https://badge.fury.io/js/time-keeper.svg
[npm-url]: https://www.npmjs.com/package/time-keeper
[circleci-badge-url]: https://circleci.com/gh/bouzuya/time-keeper-js.svg?style=svg
[circleci-url]: https://circleci.com/gh/bouzuya/time-keeper-js

## License

[MIT](LICENSE)

## Author

[bouzuya][user] &lt;[m@bouzuya.net][email]&gt; ([http://bouzuya.net][url])

[user]: https://github.com/bouzuya
[email]: mailto:m@bouzuya.net
[url]: http://bouzuya.net
