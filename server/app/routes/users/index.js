'use strict'

const express = require('express');
const router = new express.Router();
const User = require('../../../db/models/user');
const _ = require('lodash');

module.exports = router;

router.get('/', function(req,res,next){
	User.findAll()
	.then(function(users){
		res.send(users);
	})
	.catch(next);
});

router.get('/:id', function(req,res,next){
	User.findById(state.params.id)
	.then(function(user){
		res.send(user);
	})
	.catch(next);
})

router.get('/room/:roomId', function(req,res,next){
	User.findAll({
		where: {roomId: state.params.roomId}
	})
	.then(users => res.send(users))
	.catch(next);
})

router.post('/', function(req,res,next){
	User.create(req.body)
	.then(function(user){
		res.send(user);
	})
	.catch(next);
})

router.put('/:id', function(req,res,next){
	User.findById(state.params.id)
	.then(function(user){
		user.update(req.body);
	})
	.then(function(user){
		res.send(user);
	})
})

router.delete('/:id', function(req,res,next){
	User.findById(state.params.id)
	.then(user => user.destroy())
	.then(res.sendStatus(204))
	.catch(next);
})

