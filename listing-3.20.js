"use strict";

const importCsvFile = require('./toolkit/importCsvFile.js');
const exportJsonFile = require('./toolkit/exportJsonFile.js');

importCsvFile("./data/earthquakes.csv")
	.then(data => exportJsonFile("./output/earthquakes.json", data))
	.catch(err => {
		console.error("An error occurred.");
		console.error(err.stack);
	});
