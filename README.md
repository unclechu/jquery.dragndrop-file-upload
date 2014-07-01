Drag'n'drop File Upload
=======================

[RequireJS](http://requirejs.org/) module.

Requirements
============

- [RequireJS](http://requirejs.org/) v2.1.11+
- [jQuery](http://jquery.com/) v2.1+
- HTML5 FileAPI
- XMLHttpRequest
- Array.prototype.map
- Uint8Array

Usage
=====

Examples
--------

[Example #1](./examples/1/index.html)

Unit testing
============

1. ```npm install```
2. Change "debug" key from false to true in [package.json](./package.json);
3. Rebuild: ```./gulp```
4. ```require(['dragndrop_file_upload'], function (a) { a.unitTesting(); a.Uploader.unitTesting(); });```

Issues
======

https://github.com/unclechu/js-amd-dragndrop_file_upload/issues

TODO
====

1. Documentation by JSDoc;
2. Demonstration of add to upload by <input type="file"> to example.

Author
======

Viacheslav Lotsmanov

License
=======

[GNU/GPLv3 by Free Software Foundation](./LICENSE)
