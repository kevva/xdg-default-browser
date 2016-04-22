# xdg-default-browser [![Build Status](https://travis-ci.org/kevva/xdg-default-browser.svg?branch=master)](https://travis-ci.org/kevva/xdg-default-browser)

> Get default browser on Linux

Issues with the output should be reported on the [Debian](https://bugs.debian.org), [Freedesktop.org](https://bugs.freedesktop.org/), [KDE](https://bugs.kde.org), [Gnome](https://bugzilla.gnome.org/), or corresponding issue trackers.


## Install

```
$ npm install --save xdg-default-browser
```


## Usage

```js
const xdgDefaultBrowser = require('xdg-default-browser');

xdgDefaultBrowser().then(browser => {
	console.log(browser);
	//=> {name: 'Google Chrome', id: 'google-chrome.desktop'}
});
```


## CLI

```
$ npm install --global xdg-default-browser
```

```
$ xdg-default-browser --help

  Example
    $ xdg-default-browser
    Google Chrome
```


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
