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

router.get('/', function(req, res, next) {
    Vote.findAll()
        .then(foundVotes => res.send(foundVotes))
        .catch(next);
});

router.get('/:id', function(req, res, next) {
    Vote.findById(req.params.id)
        .then(foundVote => res.send(foundVote))
        .catch(next);
});

router.get('/room/:roomId', function(req, res, next) {
    Vote.findAll({
            where: {
                roomId: req.params.roomId
            },
            include: [{
                all: true,
            }]
        })
        .then(foundVotes => res.send(foundVotes))
        .catch(next);
});
