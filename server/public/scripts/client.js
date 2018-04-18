console.log('client.js is loaded');

$(document).ready(onReady);

function onReady() {
    console.log('jQuery is loaded');
    appendSomething();
}

function appendSomething() {
    console.log('append something called');
    $('.header').append('<h1>Famous Quotes</h1>');
}