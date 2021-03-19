const expressJwt = require('express-jwt');

function authJwt() {
    const secret = process.env.secret;
    const api = process.env.API_URL;
    return expressJwt({
        secret,
        algorithms: ['HS256'],
        isRevoked: isRevoked
    }).unless({
        path: [
            // excluded paths ands HTML methods
            {
                url: `${api}/ads`, methods: ['GET', 'OPTIONS'],
            },
            // `${api}/users`, // to remove on deployment 
            // `${api}/ads`,
            `${api}/users/login`,
            `${api}/users/register`,
        ]
    })
}

async function isRevoked(req, payload, done) {
    if(payload.isAdmin){
        done();
    }
    if(payload.isVolunteer){
        done(null, true);
    }
    if(payload.isCharity){
        done();
    }  
}
module.exports = authJwt;