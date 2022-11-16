let middleware = function(req, res, next) {
    if (req.session && req.session.user.admin == true) {
        return next()
    }
    return res.redirect("/");
};

module.exports = middleware;