var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Reservation = require('../models/Reservation.js');

/* GET /reservations listing. */
router.get('/', function(req, res, next) {

  Reservation.find(function (err, reservations) {
    if (err) return next(err);
    console.log(reservations)
    res.json(reservations);
  });

});

router.post('/', function(req, res, next) {
  Reservation.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.get('/:id', function(req, res, next) {
  Reservation.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.put('/:id', function(req, res, next) {
  Reservation.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.delete('/:id', function(req, res, next) {
  Reservation.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


module.exports = router;