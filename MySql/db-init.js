'use strict';

var papa = require('papaparse');
var fs = require('fs');

//
// Read a text file form the file system.
//
var read = function (fileName) {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, 'utf8',
            function (err, textFileData) {
                if (err) {
                    reject(err);
                    return;
                }

                resolve(textFileData);
            }
        );
    });
};

//
// Helper function to import a CSV file.
//
var importCsvFile = function (filePath) {
	return read(filePath)
		.then(textFileData => {
			var result = papa.parse(textFileData, {
				header: true,
				dynamicTyping: true,
			});
			return result.data;
		});
};

var exportToMySql = function (db, tableName, data) {
    return data.reduce(
            (prevPromise, record) =>
                prevPromise.then(() =>
                    db.exec(
                        'insert into ' + tableName + ' set ?',
                        record
                    )
                ),
            Promise.resolve()
        );
};

var mysql = require('nodejs-mysql').default;

var config = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'earthquakes',
    dateStrings: true,
    debug: true,
    acquireTimeout: 0,
    connectTimeout: 0,
};

var db = mysql.getInstance(config);

var createDbCmd =
    "create table largest_earthquakes ( Magnitude double, Time datetime, Latitude double, Longitude double, `Depth/Km` double )";

db.exec(createDbCmd)
    .then(() => importCsvFile('/code/data/earthquakes.csv'))
    .then(data => exportToMySql(db, 'largest_earthquakes', data))
   .catch(err => {
        console.error("Failed to create the database table.");
        console.error(err.stack);
    })
    .then(() => {
        process.exit(); //todo: Shouldn't have to do this.
    });
