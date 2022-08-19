const path = require("path");
const fs = require("fs");

let productsModel = {
  all: function () {
    let file = path.resolve(__dirname, "../data", "products.json");
    let data = fs.readFileSync(file);
    return JSON.parse(data);
  },
  one: function (sku) {
    let all = this.all();
    return all.find(function (element) {
      return element.sku == sku;
    });
  },
  generate: function (data) {
    let all = this.all();
    let last = all.pop();
    let newProdutc = {};

    if (!last) {
        newProdutc.sku = 1;
    } else {
        newProdutc.sku = last.sku + 1;
    }
    newProdutc.name = data.name;
    newProdutc.description = data.description;
    newProdutc.price = parseInt(data.price);
    newProdutc.category = data.category;
    newProdutc.season = data.season;
    newProdutc.image = data.image;
    return newProdutc;
  },
  write: function (data) {
    let direccion = path.resolve(__dirname, "../data", "products.json");
    //En la linea justo de abajo, se coloca el segundo parametro (null) y el tercer paremetro (numero de tabulaciones que se desea), para que el archivo json en la base de datos se vea de forma mas ordenado, estos dos parametros son opcionales.
    let file = JSON.stringify(data, null, 2);
    return fs.writeFileSync(direccion, file);
  },
};

module.exports = productsModel;
