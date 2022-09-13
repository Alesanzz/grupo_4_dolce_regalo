let middleware = function (req, res, next) {
    if(req.session && req.session.user){
        next()
    }
      return res.redirect("/user/login");
  };
  
  module.exports = middleware;
  