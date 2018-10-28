A simple JavaScript library for listing the official holidays for Norway for any given year.  

# Installation

`npm install holidays-norway`

# Usage

```javascript
import holidays from 'holidays-norway';

console.log(holidays(2015));
```

…or using `require()`:

```javascript
const holidays = require('holidays-norway').default;

console.log(holidays(2015));
```

will output the holidays for 2015:

```
[ { name: 'Palmesøndag', date: '2015-03-29' },
  { name: 'Skjærtorsdag', date: '2015-04-02' },
  { name: 'Langfredag', date: '2015-04-03' },
  { name: '1. påskedag', date: '2015-04-05' },
  { name: '2. påskedag', date: '2015-04-06' },
  { name: 'Kristi Himmelsprettsdag', date: '2015-05-14' },
  { name: '1. pinsedag', date: '2015-05-24' },
  { name: '2. pinsedag', date: '2015-05-25' },
  { name: 'Nyttårsdag', date: '2015-01-01' },
  { name: '1. mai', date: '2015-05-01' },
  { name: '17. mai', date: '2015-05-17' },
  { name: '1. juledag', date: '2015-12-25' },
  { name: '2. juledag', date: '2015-12-26' },
  { name: 'Nyttårsaften', date: '2015-12-31' } ]
```

# Testing

`npm run test`

# Building

`npm run build`

# Author

Gunnar Fornes <gunnarfornes@gmail.com>

# Credits

This library is a partial port of [holidays/holidays](https://github.com/holidays/holidays/blob/master/lib/holidays.rb).

# License

(The MIT License)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
