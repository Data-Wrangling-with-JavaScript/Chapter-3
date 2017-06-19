'use strict';

var importFromMySql = require('./toolkit/importFromMySql.js');

var config = {
    host: 'localhost',
    port: 5000,
    user: 'root',
    password: 'root',
    database: 'earthquakes',
    dateStrings: true,
    debug: true
};

var db = mysql.getInstance(config);

return importFromSQL(remoteDb, 'largest_earthquakes')
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.error(err);
    });