//requerimientos basicos
const express = require("express");
const router = express.Router();

const path = require("path");
const fs = require("fs");
const multer = require("multer");

const productController = require("../controllers/products.controller");

//middleware que se encargar de verificar si se esta logeado o no
const isLoggedAdmin = require("../middlewares/isLoggedAdmin");

//requiriendo todas las validaciones
const validadorParaProductos = require("../validation/validacion.product");
const validadorParaEditarProductos = require("../validation/validacion.product.edit");

//parte de la configuracion de multer
const destination = function(req, file, cb) {
    let folder = path.resolve(
        __dirname,
        "..",
        "..",
        "public",
        "images",
        "products"
    );
    //con las dos lineas de abajo, decimos "si la carpeta "folder" no existe... java la tiene que crear"
    if (!fs.existsSync(folder)) {
        fs.mkdirSync(folder);
    }
    return cb(null, folder);
};
const filename = function(req, file, cb) {
    let unique = Date.now() + "-" + Math.round(Math.random() * 1e9);
    let name = file.fieldname + "-" + unique + path.extname(file.originalname);
    return cb(null, name);
};

const upload = multer({
    storage: multer.diskStorage({ destination, filename }),
});

//rutas donde se ve y se detallan productos
router.get("/products", productController.index);
router.get("/products/detail/:sku", productController.show);
router.get("/products/category/:name", productController.showCategory);
router.get("/products/season/:name", productController.showSeason);

//rutas donde se crean productos
router.get("/products/new", [isLoggedAdmin], productController.create);
router.post("/products/save", [isLoggedAdmin], upload.any(), validadorParaProductos, productController.save);

//rutas donde se editan productos
router.get("/products/edit/:sku", [isLoggedAdmin], productController.edit);
router.put("/products/update", [isLoggedAdmin], upload.any(), validadorParaEditarProductos, productController.update);

//ruta para borrar productos
router.delete("/products/delete", [isLoggedAdmin], productController.destroy);

module.exports = router;