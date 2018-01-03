"use strict";

function importFromMySql (db, tableName) {
    return db.exec("select * from " + tableName);
};

module.exports = importFromMySql;