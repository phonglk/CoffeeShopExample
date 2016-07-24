var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/polymer*', function(req, res, next) {
  res.render('index');
});

module.exports = router;
