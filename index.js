let express = require('express'),
    path = require('path');

let app = express();
const public = path.join(__dirname, 'public');

app.get('/', function (req, res, next) {
    res.send('hello world!');
});

function getFilePath(fileName) {
    return path.join(public, fileName);
}

app.get('/file/:name', function (req, res, next) {
    var fileName = req.params.name;
    res.download(getFilePath(fileName), fileName, function (err) {
        if (err) {
            next(err);
        } else {
            console.log('Sent:', fileName);
        }
    });
});

app.listen(8090, '127.0.0.1', function () {
    console.log('Listening on port 8090');
});
