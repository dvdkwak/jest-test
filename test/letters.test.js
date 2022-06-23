const concat = require('../functions/letters/concat');
const cleanse = require('../functions/letters/cleanse');

describe('Testing string functions.', () => {
  test('Concatination of 2 strings', () => {
    expect(concat('I am part of a ', 'longer string!')).toBe('I am part of a longer string!');
  });

  test('Cleaning a string of a given character.', () => {
    expect(cleanse('I am a part of a longer string!', 'a')).toBe('I m  prt of  longer string!');
  });
});