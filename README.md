ActivLog Pebble.js App
======================

[![Build Status](https://travis-ci.org/pebble/pebblejs.svg?branch=master)](https://travis-ci.org/pebble/pebblejs)

Pebble.js lets you write beautiful Pebble applications completely in JavaScript.

Pebble.js applications run on your phone. They have access to all the resources of your phone (internet connectivity, GPS, almost unlimited memory, etc). Because they are written in JavaScript they are also perfect to make HTTP requests and connect your Pebble to the internet.

This mixes color presentation logic with interaction logic.


### XMLHttpRequest

`XMLHttpRequest` is [available for your use](https://developer.pebble.com/guides/communication/using-pebblekit-js/#using-xmlhttprequest), but consider using the [ajax] module instead which provides a jQuery-like ajax alternative to performing asynchronous and synchronous HTTP requests, with built in support for forms and headers.

````js
var ajax = require('ajax');

ajax({ url: 'http://api.theysaidso.com/qod.json', type: 'json' },
  function(data, status, req) {
    console.log('Quote of the day is: ' + data.contents.quotes[0].quote);
  }
);

### ActivLog
