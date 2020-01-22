const jwt = require('jsonwebtoken')
const secret = require('../config').secret

const generateJWT = (id,username) => {
    var today = new Date();
    var exp = new Date(today);
    exp.setDate(today.getDate() + 60);
  
    return jwt.sign({
      id: id,
      username: username,
      exp: parseInt(exp.getTime() / 1000),
    }, secret);
}

module.exports = generateJWT;