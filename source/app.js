const express = require("express");
const path = require("path");
//las mejores
const server = express();
const port = process.env.PORT || 3030;
server.listen(port, () => {
  console.log("Starting server at port 3030...");
});

const publicPath = path.resolve(__dirname, "../public");
server.use(express.static(publicPath));

server.get("/", function (req, res) {
  let file = path.resolve(__dirname, "views", "home.html");
  res.sendFile(file);
});

server.get("/login", function (req, res) {
  let file = path.resolve(__dirname, "views", "login.html");
  res.sendFile(file);
});

server.get("/product", function (req, res) {
    let file = path.resolve(__dirname, "views", "products.html");
    res.sendFile(file);
  });

server.get("/register", function (req, res) {
  let file = path.resolve(__dirname, "views", "register.html");
  res.sendFile(file);
});