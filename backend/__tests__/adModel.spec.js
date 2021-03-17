const express = require('express');
const { Ad } = require('../models/ad');
const dbHandler = require('../db-handler');
require("dotenv").config();

// const request = require('supertest');
const mongoose = require("mongoose");
const charityAd = { title: 'Oxfam', location: 'London', description: 'We need help', contact: 'test@test.com' };

beforeAll(async () => await dbConnect());
afterEach(async () => await dbClear());
afterAll(async () => await dbClose());

describe("Ad",() => {
  describe("Create", () => {

    it("charity can post an ad", async () => {
      const validAd = new Ad(charityAd);
      const savedAd = await validAd.save();
      // Object Id should be defined when successfully saved to MongoDB.
      expect(savedAd._id).toBeDefined();
      expect(savedAd.title).toBe(charityAd.title);
      expect(savedAd.location).toBe(charityAd.location);
      expect(savedAd.description).toBe(charityAd.description);
      expect(savedAd.contact).toBe(charityAd.contact);
    });
  });
});


// module.exports = app
