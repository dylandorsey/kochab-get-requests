console.log('client.js is loaded');

$(document).ready(onReady);

function onReady() {
    console.log('jQuery is loaded');
    $.ajax({
        type: 'GET',
        url: '/all-quotes'
    })
    .then(function(response) {
        console.log('promise ring');
        console.log(response);
    });
    $('#quoteBtn').on('click', generateQuote);
}

function generateQuote(){
    $.ajax({
        type: 'GET',
        url: '/random-quote'
    })
    .then(function(response) {
        // console.log('promise ring');
        $('#quoteOutput').text(response.quote);
    });

}