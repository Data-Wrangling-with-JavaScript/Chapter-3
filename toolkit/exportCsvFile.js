"use strict";

const papa = require('papaparse');
const file = require('./file.js');

function exportCsvFile (fileName, data) {
    const json = papa.unparse(data);
    return file.write(fileName, json);
};

module.exports = exportCsvFile;
