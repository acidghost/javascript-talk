const gulp = require('gulp');
const spawn = require('child_process').spawn;

gulp.task('slides', function() {
  spawn('pandoc', ['-s', 'slides.md', '-t', 'revealjs', '-o', 'slides.html']);
});

gulp.task('dev', function() {
  gulp.watch('slides.md', ['slides'])
});

gulp.task('default', ['slides', 'dev'])
