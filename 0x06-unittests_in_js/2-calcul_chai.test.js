/* eslint-disable jest/valid-expect */
/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable jest/expect-expect */
const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('type == SUM', () => {
    it('zeros', () => {
      expect(calculateNumber('SUM', 0, 0)).to.equal(0);
    });
    it('negative numbers', () => {
      expect(calculateNumber('SUM', -1.3, -4.2)).to.equal(-5);
    });
    it('positive numbers', () => {
      expect(calculateNumber('SUM', 2.3, 1.5)).to.equal(4);
    });
    it('positive and negative numbers', () => {
      expect(calculateNumber('SUM', 2.3, -1.5)).to.equal(1);
    });
    it('negative numbers and positive', () => {
      expect(calculateNumber('SUM', -2.3, 1.5)).to.equal(0);
    });
  });

  describe('type == SUBTRACT', () => {
    it('zeros', () => {
      expect(calculateNumber('SUBTRACT', 0, 0)).to.equal(0);
    });
    it('negative numbers', () => {
      expect(calculateNumber('SUBTRACT', -1.3, -4.2)).to.equal(3);
    });
    it('positive numbers', () => {
      expect(calculateNumber('SUBTRACT', 2.3, 1.5)).to.equal(0);
    });
    it('positive and negative numbers', () => {
      expect(calculateNumber('SUBTRACT', 2.3, -1.5)).to.equal(3);
    });
    it('negative and positive numbers', () => {
      expect(calculateNumber('SUBTRACT', -2.3, 1.5)).to.equal(-4);
    });
  });

  describe('type == DIVIDE', () => {
    it('zeros', () => {
      expect(calculateNumber('DIVIDE', 0, 0)).to.equal('Error');
    });
    it('positive numbers', () => {
      expect(calculateNumber('DIVIDE', 4.0, 2.0)).to.equal(2.0);
    });
    it('positive and negative', () => {
      expect(calculateNumber('DIVIDE', -7.0, 2.0)).to.equal(-3.5);
    });
    it('negative numbers', () => {
      expect(calculateNumber('DIVIDE', -7.0, -2.0)).to.equal(3.5);
    });
    it('0 and positive number', () => {
      expect(calculateNumber('DIVIDE', 0.0, 5.0)).to.equal(0);
    });
    it('0 and negative number', () => {
      expect(calculateNumber('DIVIDE', 0.0, -5.0)).to.equal(-0);
    });
    it('number and 0', () => {
      expect(calculateNumber('DIVIDE', 5.0, 0)).to.equal('Error');
    });
  });
});
