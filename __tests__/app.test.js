// __tests__/app.test.js
const { add } = require('../app');

describe('add function', () => {
  test('should add two numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
  });
});
