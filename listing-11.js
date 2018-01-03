"use strict";

var importCsvFromRestApi = require('./toolkit/importCsvFromRestApi.js');

var url = "https://earthquake.usgs.gov/fdsnws/event/1/query.csv?starttime=2017-01-01&endtime=2017-03-02";
importCsvFromRestApi(url)
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.error(err);
    });
