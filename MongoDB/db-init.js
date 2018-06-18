'use strict';

const papa = require('papaparse');
const fs = require('fs');

//
// Read a text file form the file system.
//
function read (fileName) {
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
function importCsvFile (filePath) {
	return read(filePath)
		.then(textFileData => {
			const result = papa.parse(textFileData, {
				header: true,
				dynamicTyping: true,
			});
			return result.data;
		});
};

function exportToMongoDB (db, collectionName, data) {
    return db[collectionName].insert(data);
};

const mongo = require('promised-mongo');

const db = mongo('localhost:27017/earthquakes', ['largest_earthquakes']);

importCsvFile('/code/data/earthquakes.csv')
    .then(data => exportToMongoDB(db, 'largest_earthquakes', data))
    .then(() => db.close())
    .catch(err => {
        console.error("An error occurred.");
        console.error(err.stack);
    });
