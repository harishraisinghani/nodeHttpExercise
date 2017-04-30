var https = require('https');

function getAndPrintHTML(options) {

    var buffer = "";
    https.get(options, function (response) {
        response.setEncoding('utf8');

        response.on('data', function (data) {
            buffer += data;
        });

        console.log(buffer + '\n');
    });
}

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
};

getAndPrintHTML(requestOptions);
