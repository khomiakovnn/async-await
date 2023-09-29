import json from '../parser.js';

test('json() should return a Promise', () => {
  const result = json(new ArrayBuffer(10));
  expect(result instanceof Promise).toBe(true);
});

test('json() should resolve with a string', async () => {
  const result = await json(new ArrayBuffer(10));
  expect(typeof result).toBe('string');
});
