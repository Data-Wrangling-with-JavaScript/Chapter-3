'use strict';

var request = require('request-promise');

var importJsonFromRestApi = function (url) {
    return request.get({
            uri: url,
            json: true
        });
};

module.exports = importJsonFromRestApi;