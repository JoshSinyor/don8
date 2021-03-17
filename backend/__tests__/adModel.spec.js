const express = require('express');
const adsRouter = require('../routes/ads');
const request = require('supertest');

const app = express();
app.use('/', adsRouter);

describe("testing-ad-routes", () => {
  it("GET / - success", async () => {
    const { body } = await request(app).get('/');
    expect(body).toEqual([
      {
        title: 'Red Cross',
        location: 'Bristol',
        description: 'Come help us now',
        contact: 'email@t.redcross',
      },
    ]);
  });
});
jest.setTimeout(30000);
