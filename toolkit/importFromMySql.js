'use strict';

var importFromMySql = function (db, tableName) {
    return db.exec('select * from ' + tableName);
};

modules.export = importFromMySql;