"use strict";

var papa = require('papaparse');
var file = require('./file.js');

function exportCsvFile (fileName, data) {
    var json = papa.unparse(data);
    return file.write(fileName, json);
};

module.exports = exportCsvFile;
