import GameSavingLoader from '../GameSavingLoader.js';

describe('GameSavingLoader', () => {
  it('should load a valid GameSaving object', async () => {
    const saving = await GameSavingLoader.load();
    expect(saving).toEqual({
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

  it('should throw an error if loading fails', async () => {
    // Создайте mock-функцию, которая будет имитировать ошибку при загрузке
    const mockRead = jest.fn(() => {
      throw new Error('Mocked error');
    });

    // Замените реальную функцию read на mock-функцию
    jest.mock('./reader', () => ({
      __esModule: true,
      default: mockRead,
    }));

    // Вызовите метод load и ожидайте ошибку
    await expect(GameSavingLoader.load()).rejects.toThrow('Failed to load game saving');
  });
});
