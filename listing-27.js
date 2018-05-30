"use strict";

const importCsvFile = require('./toolkit/importCsvFile.js');
const exportToMySql = require('./toolkit/exportToMySql.js');
const mysql = require('nodejs-mysql').default;

const config = {
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

const db = mysql.getInstance(config);

importCsvFile("./data/earthquakes.csv")
    .then(data => exportToMySql(db, "largest_earthquakes_export", data))
    .catch(err => {
        console.error("An error occurred.");
        console.error(err.stack);
    });
