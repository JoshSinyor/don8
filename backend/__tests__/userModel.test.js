const express = require('express');
const { User } = require('../models/user');
const dbHandler = require('../db-handler');
require("dotenv").config();
// const request = require('supertest'); ? might need this later
const mongoose = require("mongoose");
const newCharity = { charityName: 'Oxfam', email: 'oxfam@oxfam.com', passwordHash: 'Password', phone: '07485672917', charityIdNumber: 1, address: 'Bristol', isCharity: True };
const newVolunteer = { firstName: 'John', lastName: 'Smith',  username: "Smithy", email: "smith@smith.com", passwordHash: 'password', phone: '07485672918', isVolunteer: True };

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
            expect(savedUser.isCharity).toBe(newCharity.isCharity);
        });
    });
});

describe("Volunteer User", () => {
    describe("Signup", () => {
        it("A volunteer user is created and saved successfully", async () => {
            let validUser = new User(newVolunteer);
            let savedUser = await validUser.save();
            expect(savedUser._id).toBeDefined();
            expect(savedUser.firstName).toBe(newVolunteer.firstName);
            expect(savedUser.lastName).toBe(newVolunteer.lastName);
            expect(savedUser.username).toBe(newVolunteer.username);
            expect(savedUser.email).toBe(newVolunteer.email);
            expect(savedUser.passwordHash).toBe(newVolunteer.passwordHash);
            expect(savedUser.phone).toBe(newVolunteer.phone);
            expect(savedUser.isVolunteer).toBe(newVolunteer.isVolunteer);
        });
    });
});
