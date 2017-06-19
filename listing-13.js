'use strict';

var request = require('request-promise');
var cheerio = require('cheerio');

var scrapeWebPage = function (url) {
    return request.get(url)
        .then(response => {
            var $ = cheerio.load(response);
            var headers = $('thead tr')
                .map((i, el) => {
                    return $(el)
                        .find('th')
                        .map((i, el) => {
                            return $(el).text();
                        })
                        .toArray();
                })
                .toArray();

            var rows = $('tbody tr')
                .map((i, el) => {
                    return [$(el)
                        .find('td')
                        .map((i, el) => {
                            return $(el).text();
                        })
                        .toArray()];
                })
                .toArray();

            return rows.map(row => {
                    var record = {};
                    headers.forEach((fieldName, columnIndex) => {
                        if (fieldName.trim().length > 0) {
                            record[fieldName] = row[columnIndex];
                        }
                    });
                    return record;
                });
        });
};

var url = 'https://earthquake.usgs.gov/earthquakes/browse/largest-world.php';
scrapeWebPage(url)
    .then(data => {
	   console.log(data);
    })
    .catch(err => {
        console.error(err);
    });
