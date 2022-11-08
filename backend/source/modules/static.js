const express = require("express");
const static = (folder) => express.static(folder);

module.exports = static;