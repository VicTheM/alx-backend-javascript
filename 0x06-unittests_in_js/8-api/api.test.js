/* eslint-disable jest/no-test-callback */
/* eslint-disable jest/lowercase-name */
/* eslint-disable jest/valid-expect */
/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable jest/expect-expect */
const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
  const API_URL = 'http://localhost:7865';
  it('GET /', (done) => {
    request.get(`${API_URL}/`, (error, response, body) => {
      expect(response.statusCode).to.be.equals(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });
});
