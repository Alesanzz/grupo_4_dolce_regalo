let middleware = function (req, res, next) {
  let ruta = req.path.split("/").pop();
  let style = "";
  if (ruta.length > 0) {
    style = ruta;
  } else {
    style = "home";
  }
  res.locals.style = style

  return next();
};

module.exports = middleware;
