import read from '../reader.js';

test('read() should return a Promise', () => {
  const result = read();
  expect(result instanceof Promise).toBe(true);
});

test('read() should resolve with a buffer', async () => {
  const result = await read();
  expect(result instanceof ArrayBuffer).toBe(true);
});
