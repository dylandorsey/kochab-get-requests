// Require express - gives us back a function
const express = require('express');
const app = express();
const port = process.env.PORT || 5000; // Used to direct traffic

allQuotes = require('./all-quotes.js');

app.use(express.static('/server/public'));

app.get('/', function (req, res) {
    res.send('Happy Wednesday');
});

app.listen(port, function () {
    console.log('listening on port', port);
});

app.get('/all-quotes', function (req, res) {
    res.send(allQuotes);
});