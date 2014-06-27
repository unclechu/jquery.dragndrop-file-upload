var pkg = require('./package.json');

var gulp = require('gulp');

var clean = require('gulp-clean');
var concat = require('gulp-concat');
var preprocess = require('gulp-preprocess');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');

gulp.task('clean-development', function () {
	gulp.src(pkg.buildFile)
		.pipe(clean({ force: true }));
});

gulp.task('clean-production', function () {
	gulp.src(pkg.buildFileMin)
		.pipe(clean({ force: true }));
});

gulp.task('clean', ['clean-development', 'clean-production']);

var preprocessContext = {
	REVISION: pkg.revision,
	DEBUG: pkg.debug,
	AUTHOR: pkg.author,
	LICENSE: pkg.license,
};

gulp.task('build-development', ['clean-development'], function () {
	gulp.src(pkg.mainModule)
		.pipe(concat( pkg.buildFile ))
		.pipe(preprocess({ context: preprocessContext }))
		.pipe(jshint())
		.pipe(gulp.dest('./'));
});

gulp.task('build-production', ['clean-production'], function () {
	gulp.src(pkg.mainModule)
		.pipe(concat( pkg.buildFileMin ))
		.pipe(preprocess({ context: preprocessContext }))
		.pipe(jshint())
		.pipe(uglify({ preserveComments: 'some' }))
		.pipe(gulp.dest('./'));
});

gulp.task('default', ['build-development', 'build-production']);