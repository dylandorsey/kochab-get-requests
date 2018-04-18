console.log('client.js is loaded');

$(document).ready(onReady);

function onReady() {
    console.log('jQuery is loaded');
    generateQuote();
    appendAllQuotes();
    $('#quoteBtn').on('click', generateQuote);
    // appendAllQuotes();
}

function appendAllQuotes() {
    $.ajax({
        type: 'GET',
        url: '/all-quotes'
    })
        .then(function (response) {
            $('#allQuotes').append(`<h3>Here are all of the quotes:</h3>`);
            for (i = 0; i < response.length; i++) {
                $('#allQuotes').append(`
                <p>${response[i].quote}<p>
                `);
            }

        });
}

function generateQuote() {
    $.ajax({
        type: 'GET',
        url: '/random-quote'
    })
        .then(function (response) {
            // console.log('promise ring');
            $('#quoteOutput').empty();
            $('#quoteOutput').append(`<h3>Here's a random quote:</h3>`);
            $('#quoteOutput').append(`<p>${response.quote}`);
        });

}