import read from './reader.js';
import json from './parser.js';

export default class GameSavingLoader {
  static async load() {
    try {
      const buffer = await read();
      const data = await json(buffer);
      const gameSaving = JSON.parse(data);
      return gameSaving;
    } catch (error) {
      throw new Error('Failed to load game saving');
    }
  }
}
