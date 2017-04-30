var https = require('https');

function getHTML(options, callback) {

    var buffer = "";
    https.get(options, function (response) {
        response.setEncoding('utf8');

        response.on('data', function (data) {
            buffer += data;
        });
        callback(buffer);
    });
}

function printHTML(html) {
    console.log(html);
}

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
};

getHTML(requestOptions, printHTML);
