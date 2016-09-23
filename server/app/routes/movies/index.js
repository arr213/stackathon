'use strict';
const router = require('express').Router(); // eslint-disable-line new-cap
const _ = require('lodash');
const Movie = require('../../../db/models/movie');
const Vote = require('../../../db/models/vote');

module.exports = router;

var ensureAuthenticated = function(req, res, next) {
    var err;
    if (req.isAuthenticated()) {
        next();
    } else {
        err = new Error('You must be logged in.');
        err.status = 401;
        next(err);
    }
};

router.get('/', ensureAuthenticated, function(req, res, next) {
    Movie.findAll()
        .then(foundMovies => res.send(foundMovies))
        .catch(next);
});

router.get('/:id', ensureAuthenticated, function(req, res, next) {
    Movie.findById(req.params.id)
        .then(foundMovie => res.send(foundMovie))
        .catch(next);
});

router.get('/room/:roomId', ensureAuthenticated, function(req, res, next) {
    Movie.findAll({
            include: [{
                model: Vote,
                where: {
                    roomId: req.params.roomId
                }
            }]
        })
        .then(foundMovies => res.send(foundMovies))
        .catch(next);
});
