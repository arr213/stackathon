'use strict';
var _ = require('lodash');
var Sequelize = require('sequelize');

var db = require('../_db');

module.exports = db.define('movie', {
    title: {
        type: Sequelize.STRING
    },
    gbid: {
        type: Sequelize.STRING
    }
});
