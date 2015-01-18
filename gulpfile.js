var pkg = require('./package.json');

var argv = require('yargs').argv;
var gulp = require('gulp');

var del = require('del');
var concat = require('gulp-concat');
var preprocess = require('gulp-preprocess');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var uglify = require('gulp-uglify');

gulp.task('clean-development', function (cb) {
	del(pkg.buildFile, { force: true }, cb);
});

gulp.task('clean-production', function (cb) {
	del(pkg.buildFileMin, { force: true }, cb);
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

if (argv.debug) preprocessContext.DEBUG = true;

gulp.task('build-development', ['clean-development'], function () {
	gulp.src(pkg.mainModule)
		.pipe(concat( pkg.buildFile ))
		.pipe(preprocess({ context: preprocessContext }))
		.pipe(jshint())
		.pipe(jshint.reporter(stylish))
		.pipe(gulp.dest('./'));
});

gulp.task('build-production', ['clean-production'], function () {
	gulp.src(pkg.mainModule)
		.pipe(concat( pkg.buildFileMin ))
		.pipe(preprocess({ context: preprocessContext }))
		.pipe(uglify({ preserveComments: 'some' }))
		.pipe(gulp.dest('./'));
});

gulp.task('default', ['build-development', 'build-production']);
