'use strict';

var mongo = require('promised-mongo');
var importFromMongoDB = require('./toolkit/importFromMongoDB.js');

var db = mongo('localhost:6000/earthquakes', ['largest_earthquakes']);

importFromMongoDB(db, 'largest_earthquakes')
    .then(data => {
        console.log(data);
    })
    .then(() => db.close())
    .catch(err => {
        console.error(err);
    });
