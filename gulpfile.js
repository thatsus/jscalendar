var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');

gulp.task('build', function () {
    return gulp.src(['calendar.js', 'calendar-setup.js', 'lang/calendar-en.js'])
        .pipe(concat('concat.js'))
        .pipe(gulp.dest('./'))
        .pipe(rename('calendar.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./'));
});

gulp.task('default', ['build'], function () {});

