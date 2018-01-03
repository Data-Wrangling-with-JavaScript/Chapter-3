"use strict";

var importCsvFile = require('./toolkit/importCsvFile.js');
var exportToMySql = require('./toolkit/exportToMySql.js');
var mysql = require('nodejs-mysql').default;

var config = {
    host: "localhost",
    port: 5000,
    user: "root",
    password: "root",
    database: "earthquakes",
    dateStrings: true,
    debug: true,
    acquireTimeout: 0,
    connectTimeout: 0,
};

var db = mysql.getInstance(config);

importCsvFile("./data/earthquakes.csv")
    .then(data => exportToMySql(db, "largest_earthquakes_export", data))
    .catch(err => {
        console.error("An error occurred.");
        console.error(err.stack);
    });
