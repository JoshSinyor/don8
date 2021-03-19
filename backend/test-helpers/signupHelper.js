const app = require("../server");
const supertest = require("supertest");
const request = supertest(app);

async function createUser() {

    return await request
      .post("/users")
      .send({
        username: 'oxfam_bath',
        charityName: 'Oxfam',
        email: 'oxfam@oxfam.com',
        password: 'Password',
        phone: '07485672917',
        charityIdNumber: '1',
        address: 'Bristol',
        isCharity: true
      })
      .set("Accept", "application/json");
}

module.exports = { createUser };
