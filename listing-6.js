"use strict";

const importJsonFile = require('./toolkit/importJsonFile.js');

importJsonFile("./data/earthquakes.json")
	.then(data => {
		console.log(data);
	})
	.catch(err => {
		console.error("An error occurred.");
		console.error(err.stack);
	});
