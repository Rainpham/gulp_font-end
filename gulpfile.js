var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var cssnano = require('gulp-cssnano');

gulp.task('sass', function () {
    return gulp.src('app/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('app'))
        .pipe(browserSync.reload({
            stream: true
        }));
})

gulp.task('watch', ['browserSync', 'sass'], function () {
    gulp.watch('app/*.scss', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/*.js', browserSync.reload);
});
// Start browserSync server
gulp.task('browserSync', function () {
    browserSync({
        server: {
            baseDir: 'app',
        }
    })
})
// Optimizing CSS and JavaScript
// chay sau cùng khi project hoàn thành
gulp.task('build', function () {
    return gulp.src('app/*.css')
        .pipe(cssnano())
        .pipe(gulp.dest('app'))
        .pipe(browserSync.reload({ // Reloading with Browser Sync
            stream: true
        }));
})