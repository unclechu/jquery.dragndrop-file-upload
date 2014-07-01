// handlers bind {{{3

function addFilesToUpload(files) { // {{{4
	$.each(files, function (i, file) {
		var mimeOk = true;

		$.each(self.params.mimeTypeFilter, function (n, mimeReg) {
			if (!file.type.match(mimeReg)) mimeOk = false;
		});

		if (mimeOk) {
			var uploadID = ++self._lastID;
			var dataToPost = $.extend({}, self.params.postData);

			new Uploader(self, {
				id: uploadID,
				file: file,
				url: self.params.uploadUrl,
				fileFieldName: self.params.fileFieldName,
				postData: dataToPost,
			}, function (err) {
				if (err) {
					if (self.params.addFileCallback instanceof Function) {
						setTimeout(function () {
							self.params.addFileCallback.call(null, err, uploadID);
						}, 1);
					}
					return;
				}

				var uploader = this;
				self._uploaders.push(uploader);

				setTimeout(function () {
					if (self.params.addFileCallback instanceof Function) {
						self.params.addFileCallback.call(
							uploader, null, uploadID, file.name, file.size, file.type
						);
					}

					if (self.params.uploaderInitCallback instanceof Function) {
						self.params.uploaderInitCallback.call(uploader);
					}

					uploader.startUploading();
				}, 1);
			}); // new Uploader()
		} else {
			if (self.params.addFileCallback instanceof Function) {
				setTimeout(function () {
					self.params.addFileCallback.call(
						null,
						new DragNDropFileUpload.exceptions.IncorrectMIMEType(null, file.type, file.name),
						uploadID
					);
				}, 1);
			}
		}
	}); // $.each(files...
} // addFilesToUpload() }}}4

self.params.dragndropArea
	.on('dragenter' + self.params.bindSuffix, function () {
		$(this).addClass( self.params.dragOverClass );
		return false;
	})
	.on('dragover' + self.params.bindSuffix, function () {
		return false;
	})
	.on('dragleave' + self.params.bindSuffix, function () {
		$(this).removeClass( self.params.dragOverClass );
		return false;
	})
	.on('drop' + self.params.bindSuffix, function (e) {
		$(this).removeClass( self.params.dragOverClass );
		var dt = e.originalEvent.dataTransfer;
		addFilesToUpload(dt.files);
		return false;
	});

self.params.inputFile
	.on('change' + self.params.bindSuffix, function () {
		addFilesToUpload(this.files);
		this.value = ''; // reset selected files
		return false;
	});

// handlers bind }}}3
