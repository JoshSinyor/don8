const app = require("../server");
const supertest = require("supertest");
const request = supertest(app);
const createUser = require("../test-helpers/signupHelper").createUser;
const logInUser = require("../test-helpers/authHelpers").logInUser;

const express = require('express');
const { User } = require('../models/user');
const dbHandler = require('../db-handler');
require("dotenv").config();
// const request = require('supertest'); ? might need this later
const mongoose = require("mongoose");
const newCharity = { username: 'oxfam_bath', charityName: 'Oxfam', email: 'oxfam@oxfam.com', password: 'Password', phone: '07485672917', charityIdNumber: '1', address: 'Bristol', isCharity: true };
const newVolunteer = { firstName: 'John', lastName: 'Smith',  username: "Smithy", email: "smith@smith.com", passwordHash: 'password', phone: '07485672918', isVolunteer: true };

beforeAll(async () => await dbConnect());
afterEach(async () => await dbClear());
afterAll(async () => await dbClose());

describe("Charity User", () => {
    describe("Signup", () => {
        it("A charity user is created and saved successfully", async () => {
            let validUser = new User(newCharity);
            let savedUser = await validUser.save();
            expect(savedUser._id).toBeDefined();
            expect(savedUser.charityName).toBe(newCharity.charityName);
            expect(savedUser.email).toBe(newCharity.email);
            expect(savedUser.password).toBe(newCharity.password);
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
            expect(savedUser.password).toBe(newVolunteer.password);
            expect(savedUser.phone).toBe(newVolunteer.phone);
            expect(savedUser.isVolunteer).toBe(newVolunteer.isVolunteer);
        });
    });
});

describe("Signup API", () => {
  it("saves a user to the database", async () => {
    const res = await createUser();
    const createdUser = await User.findOne({email:  'oxfam@oxfam.com'})
    expect(res.status).toBe(200)
    expect(createdUser._id).toBeDefined()
  })
})


describe("Login", () => {
    it("A user can log in with the correct password", async () => {
        let user = await createUser();
        let userLoggedIn = await logInUser();
        let parsedUser = JSON.parse(user.text);
        let parsedUserLoggedIn = JSON.parse(userLoggedIn.text);
        expect(userLoggedIn.status).toEqual(200);
        expect(parsedUser.charityName).toBe("Oxfam");
        expect(parsedUserLoggedIn.user).toEqual("oxfam@oxfam.com");
    });
});
