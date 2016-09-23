'use strict';
var _ = require('lodash');
var Sequelize = require('sequelize');

var db = require('../_db').default;

module.exports = db.define('movie', {
    title: {
        type: Sequelize.STRING
    },
    gbid: {
        type: Sequelize.STRING
    },
    image: {
    	type: Sequelize.STRING
    },
    genres: {
    	type: Sequelize.ARRAY(Sequelize.TEXT)
    },
    sources: {
    	type: Sequelize.ARRAY(Sequelize.TEXT)
    },
    rating: {
    	type: Sequelize.STRING
    },
    overview: {
    	type: Sequelize.TEXT
    }
});
