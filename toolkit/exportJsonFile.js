"use strict";

var file = require('./file.js');

function exportJsonFile (fileName, data) {
    var json = JSON.stringify(data, null, 4);
    return file.write(fileName, json);
};

module.exports = exportJsonFile;
