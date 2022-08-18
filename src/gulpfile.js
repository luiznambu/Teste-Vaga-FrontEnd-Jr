var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass')(require('sass'));

function style() {
    return gulp.src('./src/styles/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(uglify())
    .pipe(gulp.dest('./src/styles/css'));
};

exports.style = style;