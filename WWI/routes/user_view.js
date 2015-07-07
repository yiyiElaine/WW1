var passport =      require('passport'),
    login = require('./middlewares/login');

module.exports = function(app) {
  app.get('/user_view',
    login.required,
    function(req, res) {
      res.render('user_view', {
        user: req.user
      });
    });
}