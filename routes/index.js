'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Gilded Alchemists Guild',
    welcome_msg: 'Welcome to the Gilded Alchemists Guild website, where every rainbow is golden.'
  });
});

module.exports = router;
