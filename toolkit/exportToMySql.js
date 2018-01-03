"use strict";

function exportToMySql (db, tableName, data) {
    return data.reduce(
            (prevPromise, record) =>
                prevPromise.then(() =>
                    db.exec(
                        "insert into " + tableName + " set ?",
                        record
                    )
                ),
            Promise.resolve()
        );
};

module.exports = exportToMySql;
