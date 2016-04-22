#!/usr/bin/env node
'use strict';
const meow = require('meow');
const xdgDefaultBrowser = require('./');

meow(`
	Example
	  $ xdg-default-browser
	  Google Chrome
`);

xdgDefaultBrowser().then(browser => console.log(browser.name));
