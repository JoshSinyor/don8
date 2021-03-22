const app = require("../server");
const supertest = require("supertest");
const request = supertest(app);
const createUser = require("../test-helpers/signupHelper").createUser;
const logInUser = require("../test-helpers/authHelpers").logInUser;

const { User } = require('../models/user');
const dbHandler = require('../db-handler');
require("dotenv").config();
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


    it("A user cannot log in with an incorrect password", async () => {
        await request
        .post("/api/v1/users/login")
        .send({
            email: "oxfam@oxfam.com",
            password: "oxfam",
        })
        .set("Accept", "application/json")
        .expect(400);
    });

    it("A user cannot log in with an incorrect email", async () => {
        await request
        .post("/api/v1/users/login")
        .send({
            email: "oxfam@example.com",
            password: "Password",
        })
        .set("Accept", "application/json")
        .expect(400);
    });
});

describe("GET /", () => {
    it("A user's information is accessed", async () => {
        let user = await createUser();
        let parsedUser = JSON.parse(user.text);
        let userLoggedIn = await logInUser();
        let parsedUserLoggedIn = JSON.parse(userLoggedIn.text);
        let oxfamToken = parsedUserLoggedIn.token;

        await request
            .get(`/api/v1/users/${parsedUser._id}`)
            .set("Authorization", `Bearer ${oxfamToken}`)
            .then((response) => {
            expect(response.statusCode).toBe(200);
            expect(response.type).toBe("application/json");
            });
    });

    it("A user's information is not accessed without authorisation", async () => {
        let validUser = new User(newCharity);
        let savedUser = await validUser.save();

        await request.get(`/users/${savedUser.id}`).then((response) => {
            expect(response.statusCode).toBe(401);
        });
        });
});
