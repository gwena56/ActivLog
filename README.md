ActivLog Pebble.js App
======================

[![Build Status](https://travis-ci.org/pebble/pebblejs.svg?branch=master)](https://travis-ci.org/pebble/pebblejs)

Pebble.js lets you write beautiful Pebble applications completely in JavaScript.

Pebble.js applications run on your phone. They have access to all the resources of your phone (internet connectivity, GPS, almost unlimited memory, etc). Because they are written in JavaScript they are also perfect to make HTTP requests and connect your Pebble to the internet.

### XMLHttpRequest

`XMLHttpRequest` is [available for your use](https://developer.pebble.com/guides/communication/using-pebblekit-js/#using-xmlhttprequest), but consider using the [ajax] module instead which provides a jQuery-like ajax alternative to performing asynchronous and synchronous HTTP requests, with built in support for forms and headers.

### ActivLog

modify in file [app.js](https://github.com/gwena56/ActivLog/tree/master/src/js) line 124 : (encode user:password with base64) whith your own owncloud credentials encoded in Base64.

### Webcloud Zaclys : [la mère zaclys](https://www.zaclys.com/)
  
### To do list ...
- `compagnon App` to change MenuItems
- work with several caldav servers not only owncloud