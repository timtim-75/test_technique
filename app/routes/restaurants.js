var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Restaurant= require('../models/Restaurant.js');

/* GET /restaurants listing. */
router.get('/', function(req, res, next) {

  Restaurant.find(function (err, restaurants) {
    if (err) return next(err);
    console.log(restaurants)
    res.json(restaurants);
  });

});

router.post('/', function(req, res, next) {
  console.log(req.body);
  Restaurant.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.get('/:id', function(req, res, next) {
  Restaurant.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.put('/:id', function(req, res, next) {
  Restaurant.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.delete('/:id', function(req, res, next) {
  Restaurant.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


module.exports = router;