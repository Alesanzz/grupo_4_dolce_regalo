const expressValidator = require("express-validator");
const userModel = require("../models/auth/users.model");
const bcrypt = require("bcrypt");

const validaciones = [
  expressValidator
    .body("email")
    .notEmpty()
    .withMessage("El email debe ser completado")
    .bail()
    .isEmail()
    .withMessage("El email no es válido")
    .bail()
    .custom((value, { req }) => {
      let user = userModel.all();
      let listOfEmail = user.map((user) => user.email);
      if (listOfEmail.indexOf(value) == -1) {
        throw new Error("Usuario no encontrado");
      } else {
        return true;
      }
    }),

  expressValidator
    .body("password")
    .notEmpty()
    .withMessage("La contraseña debe ser completada")
    .bail()
    .isLength({ min: 4, max: 10 })
    .withMessage("La contraseña no es válida")
    .bail()
    .custom((value, { req }) => {
      let user = userModel.all();
      let result = user.find((user) => user.email == req.body.email);
      if (!result) {
        throw new Error("Usuario no encontrado");
      }
      // Para validar una contraseña encriptada, se debe utilizar "bcrypt.compareSync"
      if (!bcrypt.compareSync(value, result.password)) {
        throw new Error("La contraseña es incorrecta");
      } else {
        return true;
      }
    }),
];

module.exports = validaciones;
