var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/polymer*', function(req, res, next) {
  var basePath = req.get('X-Development-Proxy') === "true" ?
    '/polymer' :
    '/dist/polymer';
  res.render('index', { basePath: basePath });
});

router.get('/react*', function(req, res, next) {
  var basePath = '/dist/react';
  res.render('react_index', { basePath: basePath });
});

module.exports = router;
