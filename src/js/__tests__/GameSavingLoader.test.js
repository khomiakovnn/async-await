import GameSavingLoader from '../GameSavingLoader.js';

test('GameSavingLoader.load() should return a Promise', () => {
  const result = GameSavingLoader.load();
  expect(result instanceof Promise).toBe(true);
});

test('GameSavingLoader.load() should resolve with a valid GameSaving object', async () => {
  const result = await GameSavingLoader.load();
  expect(result).toEqual({
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  });
});
