// Require express - gives us back a function
const express = require('express'); // Import express
const app = express(); // assign express as a function to a variable
const PORT = 5000; // Used to direct traffic

allQuotes = require('./all-quotes.js');

app.use(express.static('server/public'));

app.get('/', (req, res) => { // request/response function
    console.log('yep it worked');
    res.send('Hey this is working'); // appends a message to the DOM
});

app.get('/all-quotes', (req, res) => {
    res.send(allQuotes);
});

app.listen(PORT, () => { // function sets up listening on PORT
    console.log(`listening on port ${PORT}`);
});

app.get('/random-quote', (req, res) => {
    const randomNumber = Math.floor(Math.random() * (allQuotes.length));
    console.log(randomNumber);
    res.send(allQuotes[randomNumber]);
});

