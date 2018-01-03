"use strict";

function exportToMongoDB (db, collectionName, data) {
    return db[collectionName].insert(data);
};

module.exports = exportToMongoDB;
