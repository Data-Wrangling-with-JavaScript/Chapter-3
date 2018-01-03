"use strict";

var importCsvFile = require('./toolkit/importCsvFile.js');
var exportJsonFile = require('./toolkit/exportJsonFile.js');

importCsvFile("./data/earthquakes.csv")
	.then(data => exportJsonFile("./output/earthquakes.json", data))
	.catch(err => {
		console.error("An error occurred.");
		console.error(err.stack);
	});
