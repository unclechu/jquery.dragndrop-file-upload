var pkg = require('./package.json');

var argv = require('yargs').argv;
var gulp = require('gulp');

var del = require('del');
var concat = require('gulp-concat');
var preprocess = require('gulp-preprocess');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var uglify = require('gulp-uglify');

var buildFile = './jquery.dragndrop-file-upload.js';
var buildFileMin = './jquery.dragndrop-file-upload.min.js';
var mainModule = './src/main.js';

gulp.task('clean-development', function (cb) {
	del(buildFile, { force: true }, cb);
});

gulp.task('clean-production', function (cb) {
	del(buildFileMin, { force: true }, cb);
});

gulp.task('clean', ['clean-development', 'clean-production']);

gulp.task('distclean', function () {
	gulp.src('./node_modules').pipe(clean({ force: true }));
});

var preprocessContext = {
	VERSION: pkg.version,
	AUTHOR: pkg.author,
	LICENSE: pkg.licenses[0].type +' ('+ pkg.licenses[0].url +')'
};

// adds unit tests to builds
if (argv.debug) preprocessContext.DEBUG = true;

gulp.task('build-development', ['clean-development'], function () {
	gulp.src(mainModule)
		.pipe(concat( buildFile ))
		.pipe(preprocess({ context: preprocessContext }))
		.pipe(jshint())
		.pipe(jshint.reporter(stylish))
		.pipe(gulp.dest('./'));
});

gulp.task('build-production', ['clean-production'], function () {
	gulp.src(mainModule)
		.pipe(concat( buildFileMin ))
		.pipe(preprocess({ context: preprocessContext }))
		.pipe(uglify({ preserveComments: 'some' }))
		.pipe(gulp.dest('./'));
});

gulp.task('default', ['build-development', 'build-production']);
