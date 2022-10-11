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
    const productToEdit = db.Product.findByPk(req.params.sku, {
      include: ["Category", "Season"],
    });
    const success = (product) =>
      res.render("products-views/product-edit", { product });
    const error = (error) => res.send(error);

    return productToEdit.then(success).catch(error);
  },

  update: async function (req, res) {
    try {
      const productoAEditar = await db.Product.findByPk(req.body.sku);

      const category = await db.Category.findOne({
        where: {
          name: req.body.category,
        },
      });
      if (category) {
        req.body.category_sku = category.sku;
      } else {
        const newCategory = await db.Category.create({
          name: req.body.category,
        });
        req.body.category_sku = newCategory.sku;
      }

      const season = await db.Season.findOne({
        where: {
          name: req.body.season,
        },
      });
      if (season) {
        req.body.season_sku = season.sku;
      } else {
        const newSeason = await db.Season.create({
          name: req.body.season,
        });
        req.body.season_sku = newSeason.sku;
      }

      if (req.files && req.files.length > 0) {
        req.body.image = req.files[0].filename;
      } else {
        req.body.image = productoAEditar.image;
      }

      await productoAEditar.update({
        ...req.body,
        price: Number(req.body.price),
      });
      return res.redirect("/products");
    } catch (error) {
      return res.send(error);
    }
  },

  destroy: async function (req, res) {
    try {
      let productoAEliminar = await db.Product.findByPk(req.body.sku);
      //para que se eliminen las imagenes
      if (productoAEliminar.image != "default-gift-image.png") {
        let file = path.resolve(
          __dirname,
          "..",
          "..",
          "public",
          "images",
          "products",
          productoAEliminar.image
        );
        fs.unlinkSync(file);
      }
      //para eliminar los datos
      const remove = await productoAEliminar.destroy();
      return res.redirect("/products");
    } catch (error) {
      return res.send(error);
    }
  },
};

module.exports = productController;
