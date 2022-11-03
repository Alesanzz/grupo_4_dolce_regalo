const expressValidator = require("express-validator");

const validaciones = [
  expressValidator
    .body("name")
    .notEmpty()
    .withMessage("Este campo debe ser completado")
    .bail()
    .isLength({ min: 3, max: 20 })
    .withMessage("Este campo debe tener entre 3 y 20 caracteres"),
    expressValidator
    .body("lastname")
    .notEmpty()
    .withMessage("Este campo debe ser completado")
    .bail()
    .isLength({ min: 3, max: 20 })
    .withMessage("Este campo debe tener entre 3 y 20 caracteres"),
    expressValidator
    .body("phone")
    .notEmpty()
    .withMessage("Este campo debe ser completado")
    .bail()
    .isLength({ min: 10, max: 16 })
    .withMessage("Este campo debe tener entre 10 y 16 caracteres"),
    expressValidator
    .body("pais")
    .notEmpty()
    .withMessage("Este campo debe ser completado")
    .bail()
    .isLength({ min: 3, max: 20 })
    .withMessage("Este campo debe tener entre 3 y 20 caracteres"),
  expressValidator
    .body("email")
    .notEmpty()
    .withMessage("El email debe ser completado")
    .bail()
    .isEmail()
    .withMessage("Email no valido"),
  expressValidator
    .body("password")
    .notEmpty()
    .withMessage("La contraseña debe ser completada")
    .bail()
    .isLength({ min: 4, max: 10 })
    .withMessage(
      "La contraseña minimo debe tener 4 caracteres y maximo 10 caracteres"
    ),
];

module.exports = validaciones;
