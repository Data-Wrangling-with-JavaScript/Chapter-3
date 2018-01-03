"use strict";

var importCsvFile = require('./toolkit/importCsvFile.js');
var exportCsvFile = require('./toolkit/exportCsvFile.js');

importCsvFile("./data/earthquakes.csv")
	.then(data => exportCsvFile("./output/earthquakes-export.csv", data))
	.catch(err => {
		console.error("An error occurred.");
		console.error(err.stack);
	});
