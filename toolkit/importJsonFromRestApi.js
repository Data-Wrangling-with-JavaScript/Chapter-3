'use strict';

var request = require('request-promise');

var importJsonFromRestApi = function (url) {
    return request.get(url)
        .then(response => {
            return JSON.parse(response);
        });
};

module.exports = importJsonFromRestApi;