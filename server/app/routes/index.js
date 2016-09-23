'use strict';
var router = require('express').Router(); // eslint-disable-line new-cap
module.exports = router;

router.use('/members', require('./members'));
router.use('/members', require('./users'));
router.use('/members', require('./rooms'));
router.use('/members', require('./movies'));
router.use('/members', require('./votes'));


// Make sure this is after all of
// the registered routes!
router.use(function (req, res, next) {
    var err = new Error('Not found.');
    err.status = 404;
    next(err);
});
