'use strict'

const express = require('express');
const router = new express.Router();
const Room = require('../../../db/models/room');
const _ = require('lodash');

module.exports = router;

router.get('/',function(req,res,next){
	Room.findAll()
	.then(rooms => res.send(rooms))
	.catch(next);
})

router.get('/:roomId', function(req,res,next){
	Room.findById(req.params.roomId)
	.then(room => res.send(room))
	.catch(next);
})

router.post('/', function(req,res,next){
	Room.create(req.body)
	.then(room => res.send(room))
	.catch(next);
})

router.put('/:roomId', function(req,res,next){
	Room.findById(req.params.roomId)
	.then(room => room.update(req.body))
	.catch(next);
})

router.delete('/:roomId', function(req,res,next){
	Room.findById(req.params.roomId)
	.then(room => room.destroy())
	.then(res.sendStatus(204))
	.catch(next);
})