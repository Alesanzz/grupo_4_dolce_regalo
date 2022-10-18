const expressValidator = require("express-validator");

const validaciones = [
  expressValidator
    .body("name")
    .notEmpty()
    .withMessage("Este campo debe ser completado")
    .bail()
    .isLength({ min: 4, max: 20 })
    .withMessage("Este campo debe tener entre 4 y 20 caracteres"),
  expressValidator
    .body("description")
    .notEmpty()
    .withMessage("Este campo debe ser completado")
    .bail()
    .isLength({ min: 4, max: 200 })
    .withMessage("Este campo debe tener entre 4 y 200 caracteres"),
  expressValidator
    .body("price")
    .notEmpty()
    .withMessage("Este campo debe ser completado")
    .bail()
    .isInt()
    .withMessage("Este campo debe tener solo caracteres numéricos"),
  expressValidator
    .body("category")
    .notEmpty()
    .withMessage("Este campo debe ser seleccionado"),
  expressValidator
    .body("season")
    .notEmpty()
    .withMessage("Este campo debe ser seleccionado"),
//   expressValidator
//     .body("images")
//     .custom(function (value, { req }) {
//       console.log(req.body);
//     })
//     .withMessage(
//       "El archivo cargado deberá tener alguno de los siguientes formatos: JPG, JPEG, PNG, GIF"
//     ),
];

module.exports = validaciones;
