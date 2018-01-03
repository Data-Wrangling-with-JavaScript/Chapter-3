"use strict";

var request = require('request-promise');
var papa = require('papaparse');

function importCsvFromRestApi (url) {
    return request.get({ 
            uri: url,
            json: false
        })
        .then(response => {
            var result = papa.parse(response, {
                header: true,
                dynamicTyping: true
            });

            return result.data;
        });
};

module.exports = importCsvFromRestApi;
