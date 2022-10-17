const bcrypt = require("bcrypt");
const db = require("../database/models");
const expressValidator = require("express-validator");

const validaciones = [
  expressValidator
    .check("email")
    .notEmpty()
    .withMessage("El email debe ser completado")
    .bail()
    .isEmail()
    .withMessage("El email no es válido")
    .bail()
    .custom(async function (value, { req }) {
      try {
        const user = await db.User.findOne({
          where: {
            email: value,
          },
        });
        if (!user) {
          throw new Error("Usuario no encontrado");
        } else {
          return true;
        }
      } catch (error) {
        return console.log(error);
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
    .custom(async function (value, { req }) {
      try {
        const result = db.User.findOne({
          where: {
            email: req.body.email,
          },
        });
        if (!result) {
          throw new Error("Usuario no encontrado");
        }
        // Para validar una contraseña encriptada, se debe utilizar "bcrypt.compareSync"
        if (!bcrypt.compareSync(value, result.password)) {
          throw new Error("La contraseña es incorrecta");
        } else {
          return true;
        }
      } catch (error) {
        return console.log(error);
      }
    }),
];

module.exports = validaciones;
