"use strict";

const importJsonFromRestApi = require('./toolkit/importJsonFromRestApi.js'); // Require our "importJsonFromRestApi" toolkit function.

const url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson";

importJsonFromRestApi(url) // Use our toolkit function to import data from the REST API.
    .then(data => { // Callback to handle imported data.
        const earthquakes = data.features.map(feature => { // Restructure incoming data to the CDR.
            const earthquake = Object.assign({}, feature.properties, { id: feature.id }); 
            return earthquake;
        });
		console.log(earthquakes); // Print the data to the console so that we can verify it.
	})
	.catch(err => { // Handle any error that might have occurred.
		console.error("An error occurred.");
		console.error(err.stack);
	}); 
