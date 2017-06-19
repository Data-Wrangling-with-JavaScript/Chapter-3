'use strict';

var importJson = require("./toolkit/importJsonFile.js");

importJson("./data/earthquakes.json")
	.then(data => {
		console.log(data);
	})
	.catch(err => {
		console.error("An error occurred.");
		console.error(err.stack);
	});
