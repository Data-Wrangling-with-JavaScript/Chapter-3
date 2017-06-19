'use strict';

var file = require("./file.js");

//
// Helper function to import a JSON file.
//
var importJsonFile = function (filePath) {
	return file.read(filePath)
		.then(textFileData => {
			return JSON.parse(textFileData);
		});
};

module.exports = importJsonFile;
