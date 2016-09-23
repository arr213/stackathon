'use strict';
var _ = require('lodash');
var Sequelize = require('sequelize');
var db = require('../_db');

module.exports = db.define('service', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	gbid: {
		type: Sequelize.STRING
	}
});
