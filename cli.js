#!/usr/bin/env node
'use strict';
var meow = require('meow');
var xdgDefaultBrowser = require('./');

meow({
	help: [
		'Example',
		'  $ xdg-default-browser',
		'  Google Chrome'
	]
});

xdgDefaultBrowser(function (err, browser) {
	if (err) {
		console.error(err.message);
		process.exit(1);
	}

	console.log(browser.name);
});
