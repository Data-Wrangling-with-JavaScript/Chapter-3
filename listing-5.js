'use strict';

var importJson = require("./toolkit/importJsonFile.js"); //#A

importJson("./data/earthquakes.json") //#B
	.then(data => { //#C
		console.log(data); //#D
	}) //#C
	.catch(err => { //#E
		console.error("An error occurred."); //#E
		console.error(err.stack);
	}); //#E
