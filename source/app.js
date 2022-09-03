//requiriendo express basico
const express = require("express");

//configuracion de servidor
const server = express();
const config = require("./modules/server");
server.listen(config.port, config.start());

//configurando express para poder usar informacion de la URL
server.use(express.urlencoded({ extended: false }));
server.use(express.json())

//cofiguracion para poder usar todos los verbos html (primero hay que instalar el npm method-override, y luego...)
const method = require("method-override");
server.use(method("_method"))

//configuracion de rutas
const path = require("path");
const public = path.join(__dirname, "../public");

//configuracion de static
const static = require("./modules/static");
server.use(static(public));

//configuracion de engine ejs
server.set("views", path.join(__dirname, "./views"));
server.set("view engine", "ejs");

//middelware para mostrar lista de categorias
server.use(require('./middlewares/header-category'))

//requiriendo las rutas de las paginas web
const homeRoutes = require("./routes/home.routes");
const authRoutes = require("./routes/auth/auth.routes");
const productRoutes = require('./routes/products.routes')
const categorieRoutes = require('./routes/categories.routes')



//path del home
server.use(homeRoutes);
//path del login
server.use(authRoutes);
//path del product
server.use(productRoutes);
//path del categorie
server.use(categorieRoutes);