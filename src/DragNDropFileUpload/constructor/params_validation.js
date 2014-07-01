// params validation {{{3

paramName = 'dragndropArea';
if (!(paramName in params)) {
	self.makeError(new DragNDropFileUpload.exceptions.RequiredParam(null, paramName));
	return false;
}
if (
	!(params[paramName] instanceof $) &&
	$.type(params[paramName]) !== 'object' &&
	$.type(params[paramName]) !== 'string'
) {
	self.makeError(new DragNDropFileUpload.exceptions.IncorrectParamValue(null, paramName));
	return false;
}
if ($(params[paramName]).size() <= 0) {
	self.makeError(new DragNDropFileUpload.exceptions.DragNDropAreaBlockNotFound());
	return false;
}

paramName = 'inputFile';
if (
	(paramName in params) &&
	params[paramName] !== null &&
	!(params[paramName] instanceof $) &&
	$.type(params[paramName]) !== 'object' &&
	$.type(params[paramName]) !== 'string'
) {
	self.makeError(new DragNDropFileUpload.exceptions.IncorrectParamValue(null, paramName));
	return false;
}

paramName = 'uploadUrl';
if (!(paramName in params)) {
	self.makeError(new DragNDropFileUpload.exceptions.RequiredParam(null, paramName));
	return false;
}
if ($.type(params[paramName]) !== 'string') {
	self.makeError(new DragNDropFileUpload.exceptions.IncorrectParamValue(null, paramName));
	return false;
}

paramName = 'fileFieldName';
if (
	paramName in params &&
	$.type(params[paramName]) !== 'string'
) {
	self.makeError(new DragNDropFileUpload.exceptions.IncorrectParamValue(null, paramName));
	return false;
}

paramName = 'progressCallback';
if (
	paramName in params &&
	!(params[paramName] instanceof Function) &&
	params[paramName] !== null
) {
	self.makeError(new DragNDropFileUpload.exceptions.IncorrectParamValue(null, paramName));
	return false;
}

paramName = 'addFileCallback';
if (
	paramName in params &&
	!(params[paramName] instanceof Function) &&
	params[paramName] !== null
) {
	self.makeError(new DragNDropFileUpload.exceptions.IncorrectParamValue(null, paramName));
	return false;
}

paramName = 'endCallback';
if (
	paramName in params &&
	!(params[paramName] instanceof Function) &&
	params[paramName] !== null
) {
	self.makeError(new DragNDropFileUpload.exceptions.IncorrectParamValue(null, paramName));
	return false;
}

paramName = 'dragOverClass';
if (
	paramName in params &&
	$.type(params[paramName]) !== 'string'
) {
	self.makeError(new DragNDropFileUpload.exceptions.IncorrectParamValue(null, paramName));
	return false;
}

paramName = 'bindSuffix';
if (
	paramName in params &&
	$.type(params[paramName]) !== 'string'
) {
	self.makeError(new DragNDropFileUpload.exceptions.IncorrectParamValue(null, paramName));
	return false;
}

paramName = 'postData';
if (
	paramName in params &&
	$.type(params[paramName]) !== 'object'
) {
	self.makeError(new DragNDropFileUpload.exceptions.IncorrectParamValue(null, paramName));
	return false;
}
for (key in params[paramName]) {
	if ($.type(params[paramName][key]) !== 'string' && $.type(params[paramName][key]) !== 'number') {
		self.makeError(new DragNDropFileUpload.exceptions.IncorrectParamValue(null, paramName));
		return false;
	}
}

paramName = 'uploaderInitCallback';
if (
	paramName in params &&
	!(params[paramName] instanceof Function) &&
	params[paramName] !== null
) {
	self.makeError(new DragNDropFileUpload.exceptions.IncorrectParamValue(null, paramName));
	return false;
}

for (key in params) {
	if (!(key in defaultParams)) {
		self.makeError(new DragNDropFileUpload.exceptions.UnknownParameter(null, key));
		return false;
	}
}

// params validation }}}3
