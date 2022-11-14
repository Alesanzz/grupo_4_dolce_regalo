//requiriendo express basico
const express = require("express");
//requiriendo dotenv 
const dotenv = require("dotenv").config()
    //require morgan
const morgan = require("morgan");
//require cors
const cors = require("cors");
//configuracion de servidor
const server = express();
const config = require("./modules/server");
server.listen(config.port, config.start());
//usando morgan
server.use(morgan('dev'))
    //usando cors
server.use(cors())

//configurando express para poder usar informacion de la URL
server.use(express.urlencoded({ extended: false }));
server.use(express.json());

//cofiguracion para poder usar todos los verbos html (primero hay que instalar el npm method-override, y luego...)
const method = require("method-override");
server.use(method("_method"));

//configuracion de rutas
const path = require("path");
const public = path.join(__dirname, "../public");

//configuracion de static
const static = require("./modules/static");
server.use(static(public));

//configuracion de engine ejs
server.set("views", path.join(__dirname, "./views"));
server.set("view engine", "ejs");

//middleware que resulta en fraccionar la ruta de cada pagina del proyecto, separandola cada "/"
server.use(require("./middlewares/style"));

//require y middleware global, para agregar la propiedad de session al request (req.session)
const session = require("express-session");
server.use(
    session({
        secret: "express users",
        resave: false,
        saveUninitialized: false,
    })
);

//require y middleware global, para agregar la propiedad de cookies al request (req.cookies) y agregar la propiedad de cookie al response (res.cookie())
const cookie = require("cookie-parser");
server.use(cookie());

//middleware global para activar el session y el cookie
server.use(require("./middlewares/user"));

//middelware para mostrar lista de categorias
server.use(require("./middlewares/header-category"));

//requiriendo las rutas de las paginas web
const homeRoutes = require("./routes/home.routes");
const userRoutes = require("./routes/auth/users.routes");
const productRoutes = require("./routes/products.routes");
const ApiUser = require("./api/routers/user.ruter");
const ApiProducts = require("./api/routers/products.router");
const ApiCategorySeason = require("./api/routers/category-season.router");
const ApiUploadFile = require("./api/routers/upload.router");
//rutas api
server.use('/api/v1/dolceregalo/users', ApiUser)
server.use('/api/v1/dolceregalo/products', ApiProducts)
server.use('/api/v1/dolceregalo/upload', ApiUploadFile)
server.use('/api/v1/dolceregalo', ApiCategorySeason)

//path de las paginas del home
server.use(homeRoutes);
//path de paginas de usuarios
server.use(userRoutes);
//path de paginas de productos
server.use(productRoutes);