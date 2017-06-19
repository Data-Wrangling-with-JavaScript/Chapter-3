'use strict';

var file = require('./toolkit/file.js'); 

var parseCustomData = function (textFileData) {
    const regex = /(.*)\|(.*)\|(.*)\|(.*)\|(.*)\|(.*)\|(.*)\|(.*)\|(.*)\|(.*)\|(.*)\|(.*)\|(.*)$/gm;

    var rows = [];
    var m;

    while ((m = regex.exec(textFileData)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }

        m.shift();

        rows.push(m);
    }

    var header = rows.shift();
    var data = rows.map(row => {
            var hash = {};
            for (var i = 0; i < header.length; ++i) {
                hash[header[i]] = row[i];
            }
            return hash;
        });

    return data;
};

file.read('./data/earthquakes.txt')
    .then(textFileData => parseCustomData(textFileData))
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.error("An error occurred.");
        console.error(err.stack);
    });
