// Uploader helpers {{{2

/**
 * Helper for "sendAsBinary" helper
 *
 * @private
 * @inner
 */
function byteValue(x) { return x.charCodeAt(0) & 0xff; }

/**
 * Alternative "sendAsBinary" method if not supported native
 *
 * @private
 * @inner
 * @param {XMLHttpRequest} xhr
 * @param {string} body
 */
function sendAsBinary(xhr, body) { // {{{3
	if (xhr.sendAsBinary) {
		// firefox
		xhr.sendAsBinary(body);
	} else {
		// chrome (W3C spec.)
		var ords = Array.prototype.map.call(body, byteValue);
		var ui8a = new window.Uint8Array(ords);
		xhr.send(ui8a);
	}
} // sendAsBinary() }}}3

// Uploader helpers }}}2
