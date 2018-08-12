"use strict";

const file = require('./toolkit/file.js');

file.read("./data/earthquakes.csv")
	.then(textFileData => {
		console.log(textFileData);
	})
	.catch(err => {
		console.error("An error occurred!");
	});
