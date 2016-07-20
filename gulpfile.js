const gulp = require('gulp');
const spawn = require('child_process').spawn;

gulp.task('slides', function() {
  spawn('pandoc', ['-s', 'slides.md', '-f', 'markdown+raw_html', '-t', 'revealjs',
    '-o', 'slides.html', '-V', 'theme:night', '--smart', '--incremental']);
});

gulp.task('dev', function() {
  gulp.watch('slides.md', ['slides'])
});

gulp.task('default', ['slides', 'dev'])
