const { request, response } = require("express");
const fs = require("fs");
const path = require("path");
const productsModel = require("../models/products.model");

const productController = {
  index: function (req, res) {
    let products = productsModel.all();
    return res.render("product-list", { data: products });
  },

  show: function (req, res) {
    let sku = parseInt(req.params.sku);
    let productOne = productsModel.one(sku);
    return res.render("product-detail", { product: productOne });
  },

  create: function (req, res) {
    return res.render("product-new");
  },

  save: function (req, res) {
    if (req.body && req.files.length > 0) {
      req.body.image = req.files[0].filename;
    } else {
      req.body.image = "default-gift-image.png";
    }

    console.log(req.body);
    let nuevo = productsModel.generate(req.body);
    let todos = productsModel.all();
    todos.push(nuevo);
    productsModel.write(todos);
    return res.redirect("/products");
  },

  edit: function (req, res) {
    let productToEdit = productsModel.one(req.params.sku);
    return res.render("product-edit", { product: productToEdit });
  },

  update: function (req, res) {
    let todos = productsModel.all();
    let actualizado = todos.map(function (elemento) {
      if (elemento.sku == req.body.sku) {
        elemento.name = req.body.name;
        elemento.description = req.body.description;
        elemento.price = parseInt(req.body.price);
        elemento.category = req.body.category;
        elemento.season = req.body.season;
        if (req.files && req.files.length > 0) {
          elemento.image = req.files[0].filename;
        } else {
          elemento.image = elemento.image;
        }
      }
      return elemento;
    });
    productsModel.write(actualizado);
    return res.redirect("/products");
  },

  remove: function (req, res) {
    //para que se eliminen las imagenes
    let product = productsModel.one(req.body.sku);
    if (product.image != "default-gift-image.png") {
      let file = path.resolve(
        __dirname,
        "..",
        "..",
        "public",
        "products",
        product.image
      );
      fs.unlinkSync(file);
    }
    //para eliminar los archivos
    let todos = productsModel.all();
    let noEliminados = todos.filter(function (elemento) {
      return elemento.sku != req.body.sku;
    });
    productsModel.write(noEliminados);
    return res.redirect("/products");
  },
};

module.exports = productController;
