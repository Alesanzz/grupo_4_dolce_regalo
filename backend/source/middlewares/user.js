const db = require("../database/models");

let middleware = async function (req, res, next) {
  let user = null;
  try {
    // paso 1: existe cookie de usuario
    if (req.cookies && req.cookies.user) {
      let result = await db.User.findOne({
        where: {
          email: req.cookies.user,
        },
      });
      req.session.user = result;
    }

    // paso 2: existe un session en usuario
    if (req.session && req.session.user) {
      user = req.session.user;
    }

    res.locals.user = user;
    return next();
  } catch (error) {
    return res.send(error);
  }
};

module.exports = middleware;
