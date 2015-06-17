'use strict';
var test = require('ava');
var xdgDefaultBrowser = require('./');

if (!process.env.CI) {
	test(function (t) {
		t.plan(2);

		xdgDefaultBrowser(function (err, browser) {
			t.assert(!err, err);
			t.assert(browser);
		});
	});
}
