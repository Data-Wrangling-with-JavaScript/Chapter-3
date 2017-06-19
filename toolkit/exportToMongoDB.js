'use strict';

var exportToMongoDB = function (db, collectionName, data) {
    return db[collectionName].insert(data);
};

module.exports = exportToMongoDB;
