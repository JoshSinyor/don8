const express = require('express');
const { User } = require('../models/charityUser');
const dbHandler = require('../db-handler');
require("dotenv").config();
// const request = require('supertest'); ? might need this later
const mongoose = require("mongoose");
const newCharity = { charityName: 'Oxfam', email: 'oxfam@oxfam.com', passwordHash: 'Password', phone: '07485672917', charityIdNumber: 1, address: 'Bristol'};
const newVolunteer = { firstName: 'John', lastName: 'Smith',  username: "Smithy", email: "smith@smith.com", passwordHash: 'password', phone: '07485672918' }

describe("Charity User", () => {
    describe("Signup", () => {
        it("A charity user is created and saved successfully", async () => {
            let validUser = new User(newCharity);
            let savedUser = await validUser.save();
            expect(savedUser._id).toBeDefined();
            expect(savedUser.charityName).toBe(newCharity.charityName);
            expect(savedUser.email).toBe(newCharity.email);
            expect(savedUser.passwordHash).toBe(newCharity.passwordHash);
            expect(savedUser.phone).toBe(newCharity.phone);
            expect(savedUser.charityIdNumber).toBe(newCharity.charityIdNumber);
            expect(savedUser.address).toBe(newCharity.address);
        });
    });
});
