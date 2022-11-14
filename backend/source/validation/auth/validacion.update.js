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
    .withMessage("Este campo debe tener entre 10 y 16 caracteres")
    .bail()
    .isInt()
    .withMessage("Esta campo debe tener solo caracteres numéricos"),
    expressValidator
    .body("pais")
    .notEmpty()
    .withMessage("Este campo debe ser seleccionado"),
    expressValidator
    .body("email")
    .notEmpty()
    .withMessage("El email debe ser completado")
    .bail()
    .isEmail()
    .withMessage("Email no valido")
    .bail()
    .custom(async function(value, { req }) {
        try {
            const result = await db.User.findOne({
                where: {
                    email: value,
                },
            });
            if (result) {
                return Promise.reject("Email en uso, seleccione otro");
            }
        } catch (error) {
            return console.log(error);
        }
    }),
    expressValidator
    .body("image")
    .custom(function(value, { req }) {
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