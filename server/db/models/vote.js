'use strict';
var _ = require('lodash');
var Sequelize = require('sequelize');
var db = require('../_db');

module.exports = db.default.define('vote', {
    status: {
        type: Sequelize.ENUM('Seen', 'Yes', 'No')
    },
});
