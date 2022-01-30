module.exports = {
    ensureAuthenticated : function(req, res, next) {
        let sess = require('../app.js').sess;
        if (sess != null) {
            return next();
        }
        res.redirect('/');
    }
}