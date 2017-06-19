'use strict';

var papa = require('papaparse');
var file = require('./file.js');

var exportCsvFile = function (fileName, data) {
    var json = papa.unparse(data);
    return file.write(fileName, json);
};

module.exports = exportCsvFile;
