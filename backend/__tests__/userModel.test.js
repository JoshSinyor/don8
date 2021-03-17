const express = require('express');
const { User } = require('../models/charityUser');
const dbHandler = require('../db-handler');
require("dotenv").config();
// const request = require('supertest'); ? might need this later
const mongoose = require("mongoose");
const newUser = { charityName: 'Oxfam', email: 'oxfam@oxfam.com', passwordHash: 'Password', };

describe("User", () => {
    describe("Signup", () => {
        it("A user is created and saved successfully", async () => {
            let validUser = new User(newUser);
            let savedUser = await validUser.save();
            expect(savedUser._id).toBeDefined();
            expect(savedUser.name).toBe(newUser.name);
            expect(savedUser.email).toBe(newUser.email);
            expect(savedUser.passwordHash).toBe(newUser.passwordHash);
        });
    });
});