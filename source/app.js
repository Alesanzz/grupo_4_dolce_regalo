const express = require("express");
const path = require("path");
//las mejores
const server = express();
const port = process.env.PORT || 3030;
const loginRoutes = require('./routes/auth/login.routes');
const registerRoutes = require('./routes/auth/register.routes');
server.listen(port, () => {
    console.log(`Starting server at port ${port}`);
});
//config engine ejs
server.set('view engine', 'ejs');
//views 
server.set("views", path.join(__dirname, "views"));
//static files
const publicPath = path.resolve(__dirname, "../public");
server.use(express.static(publicPath));
//home
server.get("/", function(req, res) {
    let file = path.resolve(__dirname, "views", "home.html");
    res.sendFile(file);
});
//path login
server.use('/', loginRoutes)
    //path register 
server.use('/', registerRoutes)
    // product
server.get("/product", function(req, res) {
    let file = path.resolve(__dirname, "views", "products.html");
    res.sendFile(file);
});