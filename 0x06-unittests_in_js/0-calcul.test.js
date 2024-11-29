/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable jest/expect-expect */
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('zeros', () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });
  it('integers', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });
  it('no rounding', () => {
    assert.strictEqual(calculateNumber(1.0, 4.0), 5);
  });
  it('rounding down a', () => {
    assert.strictEqual(calculateNumber(1.2, 6.0), 7);
  });
  it('rounding down b', () => {
    assert.strictEqual(calculateNumber(1.0, 2.3), 3);
  });
  it('rounding down a and b', () => {
    assert.strictEqual(calculateNumber(1.3, 3.4), 4);
  });
  it('rounding up a', () => {
    assert.strictEqual(calculateNumber(1.6, 6.0), 8);
  });
  it('rounding up b', () => {
    assert.strictEqual(calculateNumber(1.0, 2.5), 4);
  });
  it('rounding up a and b', () => {
    assert.strictEqual(calculateNumber(1.5, 3.6), 6);
  });
  it('rounding down a and b with trailing 9\'s', () => {
    assert.strictEqual(calculateNumber(1.499999, 9.499999), 10);
  });
});
