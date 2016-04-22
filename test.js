'use strict';
var test = require('ava');
var xdgDefaultBrowser = require('./');

if (!process.env.CI) {
	test(function (t) {
		t.plan(1);

		xdgDefaultBrowser().then(function (browser) {
			t.assert(browser);
		});
	});
}
