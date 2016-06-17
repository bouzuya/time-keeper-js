# TimeKeeper.js

A simple date-time library.

## Features

- simple api
    - no support milliseconds.
    - no support day of weeks.
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
import { now, parseISOString, parseUNIXTime } from 'time-keeper';

const dt1 = now();
const dt2 = parseUNIXTime(dt1.toUNIXTime());
assert(dt1.toString() === dt2.toString());

const dt3 = parseISOString('2016-06-17T23:28:40+09:00');
assert(dt3.get('year') === 2016);
assert(dt3.get('month') === 6);
assert(dt3.get('date') === 17);
assert(dt3.get('hour') === 23);
assert(dt3.get('minute') === 28);
assert(dt3.get('second') === 40);
assert(dt3.toTimeZoneOffsetString() === '+09:00');

const dt4 = dt3.inTimeZone('+00:00');
assert(dt3.toISOString() === '2016-06-17T23:28:40+09:00');
assert(dt4.toISOString() === '2016-06-17T14:28:40+00:00');

const dt5 = dt4.plus(2, 'day');
assert(dt4.toISOString() === '2016-06-17T14:28:40+00:00');
assert(dt5.toISOString() === '2016-06-19T14:28:40+09:00');
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
