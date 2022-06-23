const multiple = require('../functions/calculations/multiple');
const add = require('../functions/calculations/add');
const substract = require('../functions/calculations/substract');

describe('Tetsing calculator functions', () => {
  test('Testing the multiplication of 5 and 6', () => {
    expect(multiple(5, 6)).toBe(30);
  });

  test('Testing the sum of 5 and 6', () => {
    expect(add(5, 6)).toBe(11);
  });

  test('Testing the substraction of 5 and 6', () => {
    expect(substract(5, 6)).toBe(-1);
  });
});