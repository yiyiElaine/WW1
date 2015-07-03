var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('main');
});

router.get('/overview', function(req, res, next) {
  res.render('overview');
});

router.get('/places2see', function(req, res, next) {
  res.render('place2see');
});

router.get('/viewstories', function(req, res, next) {
  res.render('viewstories');
});

router.get('/map', function(req, res, next) {
  res.render('map');
});

module.exports = router;
