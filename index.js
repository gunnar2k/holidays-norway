import moment from 'moment';

const getEaster = (year) => {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const n0 = (h + l + 7 * m + 114);
  const n = Math.floor(n0 / 31) - 1;
  const p = n0 % 31 + 1;
  return new Date(year,n,p);
}

export default (year) => {
  const easter = getEaster(year);
  return [
    {
      name: 'Palmesøndag',
      date: moment(easter).subtract(7, 'days').format('YYYY-MM-DD'),
    },
    {
      name: 'Skjærtorsdag',
      date: moment(easter).subtract(3, 'days').format('YYYY-MM-DD'),
    },
    {
      name: 'Langfredag',
      date: moment(easter).subtract(2, 'days').format('YYYY-MM-DD'),
    },
    {
      name: '1. påskedag',
      date: moment(easter).format('YYYY-MM-DD'),
    },
    {
      name: '2. påskedag',
      date: moment(easter).add(1, 'days').format('YYYY-MM-DD'),
    },
    {
      name: 'Kristi Himmelsprettsdag',
      date: moment(easter).add(39, 'days').format('YYYY-MM-DD'),
    },
    {
      name: '1. pinsedag',
      date: moment(easter).add(49, 'days').format('YYYY-MM-DD'),
    },
    {
      name: '2. pinsedag',
      date: moment(easter).add(50, 'days').format('YYYY-MM-DD'),
    },
    {
      name: 'Nyttårsdag',
      date: moment().year(year).startOf('year').format('YYYY-MM-DD'),
    },
    {
      name: '1. mai',
      date: moment().year(year).month('may').date(1).format('YYYY-MM-DD'),
    },
    {
      name: '17. mai',
      date: moment().year(year).month('may').date(17).format('YYYY-MM-DD'),
    },
    {
      name: '1. juledag',
      date: moment().year(year).month('december').date(25).format('YYYY-MM-DD'),
    },
    {
      name: '2. juledag',
      date: moment().year(year).month('december').date(26).format('YYYY-MM-DD'),
    },
    {
      name: 'Nyttårsaften',
      date: moment().year(year).month('december').date(31).format('YYYY-MM-DD'),
    }
  ];
};
