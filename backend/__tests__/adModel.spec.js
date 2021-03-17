const express = require('express');
const adsModel = require('../models/ad');
const dbHandler = require('db-handler');
// const request = require('supertest');
// const app = express();
// const api = process.env.API_URL;
const app = require("../app");
const mongoose = require("mongoose");
const supertest = require("supertest");

beforeAll(async () => await dbConnect());

describe("Ad",function() {
  describe("Create", function () {
    it("charity can post an ad", function() {

    });
  });
});

module.exports = app
