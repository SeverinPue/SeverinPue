var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('default', function() {
    gulp.src('/')
        .pipe(webserver({
            livereload: true,
            directoryListing: false,
            open: true,
            fallback: 'index.html'
        }));
});