import ArrayBufferConverter from '../ArrayBufferConverter.js';
import getBuffer from '../getBuffer.js';

test('ArrayBufferConverter can load and convert to string', () => {
  const arrayBufferConverter = new ArrayBufferConverter();
  const buffer = getBuffer();
  arrayBufferConverter.load(buffer);
  const result = arrayBufferConverter.toString();

  expect(result).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
