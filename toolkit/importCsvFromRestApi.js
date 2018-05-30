"use strict";

const request = require('request-promise');
const papa = require('papaparse');

function importCsvFromRestApi (url) {
    return request.get({ 
            uri: url,
            json: false
        })
        .then(response => {
            const result = papa.parse(response, {
                header: true,
                dynamicTyping: true
            });

            return result.data;
        });
};

module.exports = importCsvFromRestApi;
