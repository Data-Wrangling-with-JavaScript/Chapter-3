"use strict";

const importCsvFile = require('./toolkit/importCsvFile.js');
const exportToMongoDB = require('./toolkit/exportToMongoDB.js');
const mongo = require('promised-mongo');

const db = mongo("localhost:6000/earthquakes", ["largest_earthquakes_export"]);

importCsvFile("./data/earthquakes.csv")
    .then(data => exportToMongoDB(db, "largest_earthquakes_export", data))
    .then(() => db.close())
    .catch(err => {
        console.error("An error occurred.");
        console.error(err.stack);
    });
