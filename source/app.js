//requiriendo express basico
const express = require("express");

//configuracion de servidor
const server = express();
const config = require("./modules/server");
server.listen(config.port, config.start());

//configurando express para el uso de los verbos de html
server.use(express.urlencoded({ extended: true }));

//configuracion de rutas
const path = require("path");
const public = path.join(__dirname, "../public");

//configuracion de static
const static = require("./modules/static");
server.use(static(public));

//configuracion de engine ejs
server.set("views", path.join(__dirname, "./views"));
server.set("view engine", "ejs");


//requiriendo las rutas de las paginas web
const homeRoutes = require("./routes/home.routes");
const loginRoutes = require("./routes/auth/login.routes");
const registerRoutes = require("./routes/auth/register.routes");
//AQUI REQUERIR LA RUTA DE PRODUCT


//path del home
server.use("/", homeRoutes);
//path del login
server.use("/", loginRoutes);
//path del register
server.use("/", registerRoutes);
//path del product
