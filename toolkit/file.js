var fs = require('fs');

//
// Read a text file form the file system.
//
var read = function (fileName) {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, 'utf8',
            function (err, textFileData) {
                if (err) {
                    reject(err);
                    return;
                }

                resolve(textFileData);
            }
        );
    });
};

module.exports = {
    read: read,
};

