const app = require("../server");
const supertest = require("supertest");
const request = supertest(app);
const createUser = require("./signupHelper").createUser;

module.exports = charityLogin = {
  email: "oxfam@oxfam.com",
  password: "Password",
};

module.exports = logInUser = async () => {
  return await request
    .post("/users/login")
    .send(charityLogin)
    .set("Accept", "application/json");
};
