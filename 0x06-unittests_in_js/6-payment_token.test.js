/* eslint-disable jest/no-test-callback */
/* eslint-disable jest/no-hooks */
/* eslint-disable no-unused-expressions */
/* eslint-disable jest/valid-expect */
/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable jest/expect-expect */
const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('getPaymentTokenFromAPI(true)', (done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response).deep.equal({ data: 'Successful response from the API' });
        done();
      });
  });
});
