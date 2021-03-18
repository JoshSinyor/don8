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
            {url: /\api\/v1\/ads(.*)/, methods: ['GET', 'OPTIONS'] },

            `${api}/v1/users/login`,
            `${api}/v1/users/register`,
        ]
    })
}

async function isRevoked(req, payload, done) {
    if(payload.isAdmin){
        done();
    }
    if(payload.isVolenteer){
        done(null, true);
    }
    if(payload.isCharity){
        done();
    }  
}
module.exports = authJwt;