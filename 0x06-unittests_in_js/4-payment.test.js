/* eslint-disable no-unused-expressions */
/* eslint-disable jest/valid-expect */
/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable jest/expect-expect */
const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with type SUM and correct arguments', () => {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber');
    const consoleLogSpy = sinon.spy(console, 'log');
    const totalAmount = 100;
    const totalShipping = 20;

    calculateNumberStub.returns(10);
    sendPaymentRequestToApi(totalAmount, totalShipping);

    expect(calculateNumberStub.alwaysCalledWith('SUM', totalAmount, totalShipping)).to.be.true;
    expect(calculateNumberStub.calledOnce).to.be.true;
    expect(consoleLogSpy.calledOnceWith('The total is: 10')).to.be.true;
    expect(consoleLogSpy.calledOnce).to.be.true;

    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });
});
