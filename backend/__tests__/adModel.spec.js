const express = require('express');
const { Ad } = require('../models/ad');
const dbHandler = require('../db-handler');
require("dotenv").config();

// const request = require('supertest');
const mongoose = require("mongoose");
const charityAd = { title: 'Oxfam', location: 'London', description: 'We need help', contact: 'test@test.com' };
const invalidField = { title: 'Oxfam', location: 'London', description: 'We need help', contact: 'test@test.com', email: 'wrong' };

beforeAll(async () => await dbConnect());
afterEach(async () => await dbClear());
afterAll(async () => await dbClose());

describe("Ad",() => {
  describe("Create", () => {

    it("charity can post an ad", async () => {
        const validAd = new Ad(charityAd);
        const savedAd = await validAd.save();

        expect(savedAd._id).toBeDefined();
        expect(savedAd.title).toBe(charityAd.title);
        expect(savedAd.location).toBe(charityAd.location);
        expect(savedAd.description).toBe(charityAd.description);
        expect(savedAd.contact).toBe(charityAd.contact);
    });
  });

    it('inserts an advert, but a field that is not defined in the schema should be undefined', async () => {
        const adWithInvalidField = new Ad(invalidField);
        const savedAdWithInvalidField = await adWithInvalidField.save();

        expect(savedAdWithInvalidField._id).toBeDefined();
        expect(savedAdWithInvalidField.email).toBeUndefined();
    });
});



