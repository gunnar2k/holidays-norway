import holidays from './dist';

const getTrivialDates = () => {
  return expect.arrayContaining([
    expect.objectContaining({
      name: 'Nyttårsaften'
    }),
  ])
};

test('returns correct (trivial dates) for 2018', () => {
  const holidaysData = holidays(2018);
  expect(holidaysData).toEqual(getTrivialDates());
});

test('returns correct (trivial dates) for year 10000', () => {
  const holidaysData = holidays(10000);
  expect(holidaysData).toEqual(getTrivialDates());
});
