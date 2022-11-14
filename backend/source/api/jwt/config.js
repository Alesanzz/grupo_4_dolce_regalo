const jwt = require('jsonwebtoken');

const secretKey = "4nGuL4RAndR34cT";
const expiresInTime = "5h";

const getJwtToken = (payload) => {
    return jwt.sign({ usuario: payload }, secretKey, { expiresIn: expiresInTime })
}

const getCompareToken = (userToken) => {
    return new Promise((resolve, reject) => {
        jwt.verify(userToken, secretKey, (err, token) => {
            if (err) {
                reject(err)
            } else {
                resolve(token)
            }
        })
    })
}


module.exports = { getJwtToken, getCompareToken }