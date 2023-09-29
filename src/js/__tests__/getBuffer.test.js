import getBuffer from '../getBuffer.js';

test('getBuffer returns a valid ArrayBuffer', () => {
  const buffer = getBuffer();
  expect(buffer instanceof ArrayBuffer).toBe(true);
});
