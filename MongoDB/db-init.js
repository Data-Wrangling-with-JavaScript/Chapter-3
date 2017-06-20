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

var exportToMongoDB = function (db, collectionName, data) {
    return db[collectionName].insert(data);
};

var mongo = require('promised-mongo');

var db = mongo('localhost:27017/earthquakes', ['largest_earthquakes']);

importCsvFile('/code/data/earthquakes.csv')
    .then(data => exportToMongoDB(db, 'largest_earthquakes', data))
    .then(() => db.close())
    .catch(err => {
        console.error("An error occurred.");
        console.error(err.stack);
    });
