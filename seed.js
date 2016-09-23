/*

This seed file is only a placeholder. It should be expanded and altered
to fit the development of your application.

It uses the same file the server uses to establish
the database connection:
--- server/db/index.js

The name of the database used is set in your environment files:
--- server/env/*

This seed file has a safety check to see if you already have users
in the database. If you are developing multiple applications with the
fsg scaffolding, keep in mind that fsg always uses the same database
name in the environment files.

*/

var chalk = require('chalk');
var db = require('./server/db');
var User = db.model('user');
var Vote = db.model('vote');
var Room = db.model('room');
var Movie = db.model('movie');
var Service = db.model('service');
var Promise = require('sequelize').Promise;

var seedUsers = function () {
    var users = [
        {
            email: 'testing@fsa.com',
            password: 'password'
        },
        {
            email: 'obama@gmail.com',
            password: 'potus'
        }
    ];

    var creatingUsers = users.map(function (userObj) {
        return User.create(userObj);
    });

    return Promise.all(creatingUsers);
};

var seedRooms = function () {
    var rooms = [
        {
             name: 'roomates'
        },
        {
             name: 'netflix and chill'
        },
        {
             name: 'friends for life'
        },
        {
             name: 'siblings'
        },
        {
             name: 'fullstack movie night'
        }
    ];

    var creatingRooms = rooms.map(function (roomObj) {
        return Room.create(roomObj);
    });
    return Promise.all(creatingRooms); 
};

var seedMovies = function () {
    var movies = [
        {
            title: 'Forrest Gump',
            gbid: 3 
        },
        {
            title: 'Pretty Woman',
            gbid: 4
        },
        {
            title: 'The Shawshank Redemption',
            gbid: 5
        },
        {
            title: 'The Godfather',
            gbid: 6
        },
        {
            title: 'Pulp Fiction',
            gbid: 7
        }
    ]

    var creatingMovies = movies.map(function (movieObj) {
        return Movie.create(movieObj);
    });
    return Promise.all(creatingMovies);
};

   


var seedVotes = function () {
    var votes = [
        {
            status: 'Yes',
            roomId: 1,
            movieId: 1,
            userId:  1,
        },
        {
            status: 'No',
            roomId: 2,
            movieId: 2,
            userId:  1,
        },
        {
            status: 'Seen',
            roomId: 3,
            movieId: 3,
            userId:  2,
        },
        {
            status: 'No',
            roomId: 4,
            movieId: 4,
            userId:  2,
        },

    ];  

    var creatingVotes = votes.map(function (voteObj) {
        return Vote.create(voteObj);
    });
    return Promise.all(creatingVotes);
};

var seedServices = function () {
    var services = [
        {
            name: 'Netflix',
            gbid: 1,
        },
        {
            name: 'Hulu',
            gbid: 2,
        },
        {
            name: 'HBO GO',
            gbid: 3,
        },
        {
            name: 'Amazon',
            gbid: 4,
        },

    ];  

    var creatingServices = services.map(function (serviceObj) {
        return Service.create(serviceObj);
    });
    return Promise.all(creatingServices);
};





db.sync({ force: true })
    .then(function () {
        return seedUsers();
    })
    .then(function () {
        return seedRooms();
    })
    .then(function () {
        return seedMovies();
    })
    .then(function () {
        return seedServices();
    })
    .then(function () {
        return seedVotes();
    })
    .then(function () {
        console.log(chalk.green('Seed successful!'));
        process.exit(0);
    })
    .catch(function (err) {
        console.error(err);
        process.exit(1);
    });
