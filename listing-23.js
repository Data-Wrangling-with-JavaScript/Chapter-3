"use strict";

var importCsvFile = require('./toolkit/importCsvFile.js');
var exportToMongoDB = require('./toolkit/exportToMongoDB.js');
var mongo = require('promised-mongo');

var db = mongo("localhost:6000/earthquakes", ["largest_earthquakes_export"]);

importCsvFile("./data/earthquakes.csv")
    .then(data => exportToMongoDB(db, "largest_earthquakes_export", data))
    .then(() => db.close())
    .catch(err => {
        console.error("An error occurred.");
        console.error(err.stack);
    });
