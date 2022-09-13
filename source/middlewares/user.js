const userModel = require("../models/auth/users.model");

let middleware = function (req, res, next) {
  let user = null;

  // paso 1: existe cookie de usuario
  if (req.cookies && req.cookies.user) {
    let users = userModel.all();
    let result = users.find(function (user) {
      return user.email == req.cookies.user;
    });
    req.session.user = result;
  }

  // paso 2: existe un session en usuario
  if (req.session && req.session.user) {
    user = req.session.user;
  }

  res.locals.user = user;

  return next();
};

module.exports = middleware;
