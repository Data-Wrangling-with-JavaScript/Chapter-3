'use strict';

var importFromMySql = function (db, tableName) {
    return db.exec('select * from ' + tableName);
};

module.exports = importFromMySql;