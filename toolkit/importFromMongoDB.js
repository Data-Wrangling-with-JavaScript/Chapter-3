'use strict';

var mongo = require('promised-mongo');

var importFromMongoDB = function (db, collectionName) {
    return db[collectionName].find().toArray();
};

module.exports = importFromMongoDB;
