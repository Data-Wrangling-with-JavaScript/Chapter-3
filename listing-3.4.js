const request = require('request-promise');

const url = "https://earthquake.usgs.gov" +
    "/earthquakes/feed/v1.0/summary/significant_month.geojson";
request.get(url)
	.then(response => {
		console.log(response);
	})
	.catch(err => {
		console.error(err);
	});
