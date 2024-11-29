/* eslint-disable no-unused-vars */
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

  it('GET /cart/:id with id a number', (done) => {
    request.get(`${API_URL}/cart/12`, (error, response, body) => {
      expect(response.statusCode).to.be.equals(200);
      expect(body).to.be.equal('Payment methods for cart 12');
      done();
    });
  });

  it('GET /cart/:id with id a negative number', (done) => {
    request.get(`${API_URL}/cart/hello`, (error, response, body) => {
      expect(response.statusCode).to.be.equals(404);
      done();
    });
  });

  it('GET /cart/:id with id not a number', (done) => {
    request.get(`${API_URL}/cart/hello`, (error, response, body) => {
      expect(response.statusCode).to.be.equals(404);
      done();
    });
  });

  it('GET /available_payments', (done) => {
    request.get(`${API_URL}/available_payments`, (error, response, body) => {
      expect(response.statusCode).to.be.equals(200);
      expect(JSON.parse(body)).deep.equals({
        payment_methods: {
          credit_cards: true,
          paypal: false,
        },
      });
      done();
    });
  });

  it('POST /login', (done) => {
    request.post({
      url: `${API_URL}/login`,
      json: { userName: 'Betty' },
    }, (error, response, body) => {
      expect(response.statusCode).to.be.equals(200);
      expect(body).to.be.equal('Welcome Betty');
      done();
    });
  });
});
