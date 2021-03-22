const app = require("../server");
const supertest = require("supertest");
const request = supertest(app);
const createUser = require("./signupHelper").createUser;


async function logInUser() {
  return await request
    .post("/api/v1/users/login")
    .send({
      email: "oxfam@oxfam.com",
      password: "Password",
    })
    .set("Accept", "application/json");
};

module.exports = { logInUser };