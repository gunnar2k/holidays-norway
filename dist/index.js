'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getEaster = function getEaster(year) {
  var a = year % 19;
  var b = Math.floor(year / 100);
  var c = year % 100;
  var d = Math.floor(b / 4);
  var e = b % 4;
  var f = Math.floor((b + 8) / 25);
  var g = Math.floor((b - f + 1) / 3);
  var h = (19 * a + b - d - g + 15) % 30;
  var i = Math.floor(c / 4);
  var k = c % 4;
  var l = (32 + 2 * e + 2 * i - h - k) % 7;
  var m = Math.floor((a + 11 * h + 22 * l) / 451);
  var n0 = h + l + 7 * m + 114;
  var n = Math.floor(n0 / 31) - 1;
  var p = n0 % 31 + 1;
  return new Date(year, n, p);
};

exports.default = function (year) {
  var easter = getEaster(year);
  return [{
    name: 'Palmesøndag',
    date: (0, _moment2.default)(easter).subtract(7, 'days').format('YYYY-MM-DD')
  }, {
    name: 'Skjærtorsdag',
    date: (0, _moment2.default)(easter).subtract(3, 'days').format('YYYY-MM-DD')
  }, {
    name: 'Langfredag',
    date: (0, _moment2.default)(easter).subtract(2, 'days').format('YYYY-MM-DD')
  }, {
    name: '1. påskedag',
    date: (0, _moment2.default)(easter).format('YYYY-MM-DD')
  }, {
    name: '2. påskedag',
    date: (0, _moment2.default)(easter).add(1, 'days').format('YYYY-MM-DD')
  }, {
    name: 'Kristi Himmelsprettsdag',
    date: (0, _moment2.default)(easter).add(39, 'days').format('YYYY-MM-DD')
  }, {
    name: '1. pinsedag',
    date: (0, _moment2.default)(easter).add(49, 'days').format('YYYY-MM-DD')
  }, {
    name: '2. pinsedag',
    date: (0, _moment2.default)(easter).add(50, 'days').format('YYYY-MM-DD')
  }, {
    name: 'Nyttårsdag',
    date: (0, _moment2.default)().year(year).startOf('year').format('YYYY-MM-DD')
  }, {
    name: '1. mai',
    date: (0, _moment2.default)().year(year).month('may').date(1).format('YYYY-MM-DD')
  }, {
    name: '17. mai',
    date: (0, _moment2.default)().year(year).month('may').date(17).format('YYYY-MM-DD')
  }, {
    name: '1. juledag',
    date: (0, _moment2.default)().year(year).month('december').date(25).format('YYYY-MM-DD')
  }, {
    name: '2. juledag',
    date: (0, _moment2.default)().year(year).month('december').date(26).format('YYYY-MM-DD')
  }, {
    name: 'Nyttårsaften',
    date: (0, _moment2.default)().year(year).month('december').date(31).format('YYYY-MM-DD')
  }];
};
