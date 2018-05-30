"use strict";

const mongo = require('promised-mongo');

function importFromMongoDB (db, collectionName) {
    return db[collectionName].find().toArray();
};

module.exports = importFromMongoDB;
