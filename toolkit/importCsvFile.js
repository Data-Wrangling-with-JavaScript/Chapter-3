'use strict';

var papa = require('papaparse');
var file = require('./file.js');

//
// Helper function to import a CSV file.
//
var importCsvFile = function (filePath) {
	return file.read(filePath)
		.then(textFileData => {
			var result = papa.parse(textFileData, {
				header: true,
				dynamicTyping: true,
			});
			return result.data;
		});
};

module.exports = importCsvFile;
