const fs = require("fs");
const path = require("path");
const db = require("../database/models");

const productController = {
  index: function (req, res) {
    db.Product.findAll({
      include: ["Category", "Season"],
      order: [["price", "ASC"]],
    }).then(function (data) {
      return res.render("products-views/product-list", { data });
    });
  },

  show: function (req, res) {
    let sku = parseInt(req.params.sku);
    db.Product.findByPk(sku, { include: ["Category", "Season"] }).then(
      function (productOne) {
        return res.render("products-views/product-detail", {
          product: productOne,
        });
      }
    );
  },

  showCategory: function (req, res) {
    let categoryName = req.params.name;
    db.Category.findOne({
      include: ["products"],
      where: {
        name: categoryName,
      },
    }).then(function (productsCategory) {
      return res.render("products-views/product-category", {
        category: productsCategory,
      });
    });
  },

  showSeason: function (req, res) {
    let seasonName = req.params.name;
    db.Season.findOne({
      include: ["products"],
      where: {
        name: seasonName,
      },
    }).then(function (productsSeason) {
      return res.render("products-views/product-season", {
        season: productsSeason,
      });
    });
  },

  create: function (req, res) {
    return res.render("products-views/product-new");
  },

  save: function (req, res) {
    if (req.body && req.files.length > 0) {
      req.body.image = req.files[0].filename;
    } else {
      req.body.image = "default-gift-image.png";
    }
    const save = db.Product.create({
      name: req.body.name,
      description: req.body.description,
      price: Number(req.body.price),
      category_sku: Number(req.body.category),
      season_sku: Number(req.body.season),
      image: req.body.image,
    });
    const success = (data) => res.redirect("/products");
    const error = (error) => res.send(error);

    return save.then(success).catch(error);
  },

  edit: function (req, res) {
    const productToEdit = db.Product.findByPk(req.params.sku, { include: ["Category", "Season"] });
    const success = (product) =>
      res.render("products-views/product-edit", { product });
    const error = (error) => res.send(error);

    return productToEdit.then(success).catch(error);
  },

  update: function (req, res) {
    if (req.files && req.files.length > 0) {
      req.body.image = req.files[0].filename;
    } else {
      req.body.image = "default-gift-image.png";
    }
    //empezar a arreglar desde aqui
    return res.send(req.body);
    const upload = db.Product.update(
      {
        name: req.body.name,
        description: req.body.description,
        price: Number(req.body.price),
        category_sku: Number(req.body.category),
        season_sku: Number(req.body.season),
        // image: req.body.image
      },
      {
        where: {
          sku: req.body.sku,
        },
      }
    );
    const success = (data) => res.redirect("/products");
    const error = (error) => res.send(error);

    return upload.then(success).catch(error);
  },

  destroy: function (req, res) {
    //para que se eliminen las imagenes
    let product = db.Product.findByPk(req.params.sku);
    if (product.image != "default-gift-image.png") {
      let file = path.resolve(
        __dirname,
        "..",
        "..",
        "public",
        "images",
        "products",
        product.image
      );
      fs.unlinkSync(file);
    }
    //para eliminar los archivos
    const remove = db.Product.destroy({
      where: {
        sku: req.body.sku,
      },
    });
    const success = (data) => res.redirect("/products");
    const error = (error) => res.send(error);

    return remove.then(success).catch(error);
  },
};

module.exports = productController;
