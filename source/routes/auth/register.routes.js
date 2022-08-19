//requerimientos basicos
const express = require("express");
const router = express.Router();

const path = require("path");
const fs = require("fs");
const multer = require("multer");

const registerController = require('../../controllers/auth/register.controller')

//parte de la configuracion de multer
const destination = function (req, file, cb) {
    let folder = path.resolve(__dirname, "..", "..", "..","public", "users");
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
router.get('/register', registerController.create)
router.post('/register/create', upload.any(), registerController.save)




module.exports = router;