'use strict'

import db from './_db'

import User from './models/user'
import Movie from './models/movie'
import Room from './models/room'
import Service from './models/service'
import Vote from './models/vote'

var Room_User = db.define('room_user', {})
var Room_Service = db.define('room_service', {})

Room.belongsToMany(User, { through: 'room_user' });
User.belongsToMany(Room, { through: 'room_user' });

Room.belongsToMany(Service, { through: 'room_service' });
Service.belongsToMany(Room, { through: 'room_service' });

User.belongsToMany(Service, { through: 'room_service' });
Service.belongsToMany(User, { through: 'room_service' });

Vote.belongsTo(Room);
Room.hasMany(Vote);

Vote.belongsTo(User);
User.hasMany(Vote);

Vote.belongsTo(Movie);
Movie.hasMany(Vote);


export default db


