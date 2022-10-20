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

  expressValidator
    .body("image")
    .custom(function (value, { req }) {
      if (req.files.length == 0) {
        return true;
      } else if (
        req.files[0].mimetype.includes("jpg") ||
        req.files[0].mimetype.includes("jpeg") ||
        req.files[0].mimetype.includes("png") ||
        req.files[0].mimetype.includes("gif")
      ) {
        return true;
      }
    })
    .withMessage(
      "El archivo cargado deberá tener alguno de los siguientes formatos: JPG, JPEG, PNG, GIF"
    ),
];

module.exports = validaciones;
