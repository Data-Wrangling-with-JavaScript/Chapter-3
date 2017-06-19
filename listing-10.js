'use strict';

var importJsonFromRestApi = require('./toolkit/importJsonFromRestApi.js');

importJsonFromRestApi('http://www.seismi.org/api/eqs')
   .then(response => {
       console.log(response); //fio:
        var data = response.earthquakes;
        console.log(data);
    })
    .catch(err => {
        console.error(err);
    });