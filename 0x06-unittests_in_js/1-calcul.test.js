/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable jest/expect-expect */
const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('type == SUM', () => {
    it('zeros', () => {
      assert.strictEqual(calculateNumber('SUM', 0, 0), 0);
    });
    it('negative numbers', () => {
      assert.strictEqual(calculateNumber('SUM', -1.3, -4.2), -5);
    });
    it('positive numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 2.3, 1.5), 4);
    });
    it('positive and negative numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 2.3, -1.5), 1);
    });
    it('negative numbers and positive', () => {
      assert.strictEqual(calculateNumber('SUM', -2.3, 1.5), 0);
    });
  });

  describe('type == SUBTRACT', () => {
    it('zeros', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 0, 0), 0);
    });
    it('negative numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -1.3, -4.2), 3);
    });
    it('positive numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.3, 1.5), 0);
    });
    it('positive and negative numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.3, -1.5), 3);
    });
    it('negative and positive numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -2.3, 1.5), -4);
    });
  });

  describe('type == DIVIDE', () => {
    it('zeros', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0, 0), 'Error');
    });
    it('positive numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 4.0, 2.0), 2.0);
    });
    it('positive and negative', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -7.0, 2.0), -3.5);
    });
    it('negative numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -7.0, -2.0), 3.5);
    });
    it('0 and positive number', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0.0, 5.0), 0);
    });
    it('0 and negative number', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0.0, -5.0), -0);
    });
    it('number and 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 5.0, 0), 'Error');
    });
  });
});
