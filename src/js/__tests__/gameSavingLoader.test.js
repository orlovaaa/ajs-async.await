import GameSavingLoader from '../gameSavingLoader';

test('GameSavingLoader should work with promise and async/await', async () => {
  const data = await GameSavingLoader.load();
  const expected = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  };
  await expect(data).toEqual(expected);
});