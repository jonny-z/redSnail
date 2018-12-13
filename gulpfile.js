var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var babel = require('gulp-babel');
var reload = browserSync.reload;

gulp.task('sass', function() {
    gulp.src('public/assets/src/scss/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('public/dist/css'))
    .pipe(reload({ stream:true }));
});
gulp.task('babel', () =>
    gulp.src('public/assets/src/es6/**/*.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gulp.dest('public/dist/js'))
);

// 监视 Sass 文件的改动，如果发生变更，运行 'sass' 任务，并且重载文件
gulp.task('serve', ['sass'], function() {
   gulp.watch('public/assets/src/scss/**/*.scss', ['sass']);
   gulp.watch('public/assets/src/es6/**/*.js', ['babel']);
});

// 监听事件
gulp.task('default', ['sass', 'babel', 'serve'])