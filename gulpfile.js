const gulp = require('gulp');
const spawn = require('child_process').spawn;
const less = require('gulp-less');

gulp.task('less', function () {
  return gulp.src('./style/style.less')
    .pipe(less())
    .pipe(gulp.dest('./style'));
});

gulp.task('slides', function() {
  spawn('pandoc', ['-s', 'slides.md', '-f', 'markdown+raw_html', '-t', 'revealjs',
    '-o', 'slides.html', '-V', 'theme:night', '--smart', '--incremental',
    '--css', './style/style.css']);
});

gulp.task('build', ['less', 'slides']);

gulp.task('dev', function() {
  gulp.watch('slides.md', ['slides']);
  gulp.watch('style/style.less', ['less']);
});

gulp.task('default', ['build', 'dev']);
