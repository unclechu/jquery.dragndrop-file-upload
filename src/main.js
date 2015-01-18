/**
 * Drag'n'drop file upload jQuery plugin
 *
 * @module jquery.dragndrop-file-upload
 * @exports DragNDropFileUpload, Uploader (as DragNDropFileUpload.Uploader)
 * @requires jquery
 * @requires HTML5 FileAPI
 * @requires XMLHttpRequest
 *
 * @version // @echo VERSION
 * @author // @echo AUTHOR
 * @license // @echo LICENSE
 * @see {@link https://github.com/unclechu/jquery.dragndrop-file-upload|GitHub}
 */

(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		// CommonJS
		module.exports = factory(require('jquery'));
	} else {
		// Global
		root.DragNDropFileUpload = factory(jQuery);
	}
})(this, function($) {

	'use strict';

	var key; // for "for"

	// @include basic_helpers.js
	// @include DragNDropFileUpload/main.js
	// @include Uploader/main.js

	/**
	 * @public
	 * @static
	 */
	DragNDropFileUpload.Uploader = Uploader;

	$.DragNDropFileUpload = DragNDropFileUpload;

	return DragNDropFileUpload;

});
