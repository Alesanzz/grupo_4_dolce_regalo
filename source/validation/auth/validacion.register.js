const db = require("../../database/models");
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
    .isLength({ min: 10, max: 10 })
    .withMessage("Este campo debe tener 10 caracteres")
    .bail()
    .isInt()
    .withMessage("Esta campo debe tener solo caracteres numéricos"),
    expressValidator
    .body("country")
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
    .body("password")
    .notEmpty()
    .withMessage("La contraseña debe ser completada")
    .bail()
    .isLength({ min: 8, max: 10 })
    .withMessage("La contraseña debe tener entre 8 caracteres y 10 caracteres")
    .bail()
    .isStrongPassword({
        minLength: 8,
        minLowercase: 0,
        minUppercase: 1,
        minNumbers: 0,
        minSymbols: 0,
    })
    .withMessage("La contraseña debe tener al menos 1 caracter en mayúscula")
    .bail()
    .isStrongPassword({
        minLength: 8,
        minLowercase: 0,
        minUppercase: 1,
        minNumbers: 0,
        minSymbols: 0,
    })
    .withMessage("La contraseña debe tener al menos 1 caracter en mayúscula")
    .bail()
    .isStrongPassword({
        minLength: 8,
        minLowercase: 0,
        minUppercase: 0,
        minNumbers: 1,
        minSymbols: 0,
    })
    .withMessage("La contraseña debe tener al menos 1 caracter numérico")
    .bail()
    .isStrongPassword({
        minLength: 8,
        minLowercase: 0,
        minUppercase: 0,
        minNumbers: 0,
        minSymbols: 1,
    })
    .withMessage("La contraseña debe tener al menos 1 caracter especial")
];

module.exports = validaciones;