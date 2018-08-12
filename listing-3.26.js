"use strict";

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

const createDbCmd =
    "create table largest_earthquakes_export ( Magnitude double, Time datetime, Latitude double, Longitude double, `Depth/Km` double )";

db.exec(createDbCmd)
    .then(() => {
        console.log("Database table created!");
    })
    .catch(err => {
        console.error("Failed to create the database table.");
        console.error(err.stack);
    });
