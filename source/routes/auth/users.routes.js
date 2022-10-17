//requerimientos basicos
const express = require("express");
const router = express.Router();

const path = require("path");
const fs = require("fs");
const multer = require("multer");

const usersController = require("../../controllers/auth/users.controller2");

//middleware que se encargar de verificar si se esta logeado o no
const isLogged = require("../../middlewares/isLogged");

//validaciones para el momento de registrarse y logearse
const validadorParaRegistrarse = require("../../validation/validacion.register");
const validadorParaActualizar = require("../../validation/validacion.update");
const validadorParaLogearse = require("../../validation/validacion.login2");

//parte de la configuracion de multer
const destination = function (req, file, cb) {
  let folder = path.resolve(
    __dirname,
    "..",
    "..",
    "..",
    "public",
    "images",
    "users"
  );
  //con las dos lineas de abajo, decimos "si la carpeta "folder" no existe... java la tiene que crear"
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder);
  }
  return cb(null, folder);
};
const filename = function (req, file, cb) {
  let unique = Date.now() + "-" + Math.round(Math.random() * 1e9);
  let name = file.fieldname + "-" + unique + path.extname(file.originalname);
  return cb(null, name);
};

const upload = multer({
  storage: multer.diskStorage({ destination, filename }),
});

//rutas donde se crean usuarios
router.get("/register", usersController.create);
router.post(
  "/register/create",
  upload.any(),
  validadorParaRegistrarse,
  usersController.save
);

//rutas para logear y desloguar un usuario
router.get("/login", usersController.login);
router.post("/access", validadorParaLogearse, usersController.access);
router.get("/logout", usersController.logout);

//rutas para ver pefil
router.get("/profile/:sku", [isLogged], usersController.myprofile);

//rutas donde se editan usuarios
router.get("/profile/edit/:sku", [isLogged], usersController.edit);
router.put(
  "/profile/update",
  upload.any(),
  validadorParaActualizar,
  usersController.update
);

//ruta para borrar un usuario
router.delete("/profile/delete", [isLogged], usersController.destroy);

module.exports = router;
