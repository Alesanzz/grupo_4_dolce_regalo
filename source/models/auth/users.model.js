const path = require("path");
const fs = require("fs");

let userModel = {
  all: function () {
    let file = path.resolve(__dirname, "../../data", "users.json");
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
    let user = {};

    if (!last) {
      user.sku = 1;
    } else {
        user.sku = last.sku + 1;
    }
    user.name = data.name;
    user.lastname = data.lastname;
    user.phone = parseInt(data.phone);
    user.city = data.city;
    user.email = data.email;
    user.password = data.password;
    user.image = data.image;
    user.category = data.category;
    return user;
  },
  write: function (data) {
    let direccion = path.resolve(__dirname, "../../data", "users.json");
    //En la linea justo de abajo, se coloca el segundo parametro (null) y el tercer paremetro (numero de tabulaciones que se desea), para que el archivo json en la base de datos se vea de forma mas ordenado, estos dos parametros son opcionales.
    let file = JSON.stringify(data, null, 2);
    return fs.writeFileSync(direccion, file);
  },
};

module.exports = userModel;
