var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var autoprefixer = require('gulp-autoprefixer');



// Compiles SCSS files from /scss into /css
gulp.task('sass', function() {
    return gulp.src('scss/styles.scss')
      .pipe(sass())
      .pipe(gulp.dest('css'))
      .pipe(browserSync.reload({
        stream: true
      }))
  });

// Configure the browserSync task
gulp.task('browserSync', function() {
    browserSync.init({
      server: {
        baseDir: '.'
      },
    })
  })

// Minify compiled CSS
gulp.task('minify-css', function() {
    return gulp.src('css/styles.css')
      .pipe(autoprefixer({
        browsers: ['last 5 versions'],
        cascade: false
      }))
      .pipe(cleanCSS({
        compatibility: 'ie8'
      }))
      .pipe(rename({
        suffix: '.min'
      }))
      .pipe(gulp.dest('css'))
      .pipe(browserSync.reload({
        stream: true
      }))
  });

// Default task
gulp.task('default', ['browserSync', 'sass', 'minify-css'], function() {
    gulp.watch('scss/*.scss', ['sass']);
    gulp.watch('css/styles.css', ['minify-css']);
    // Reloads the browser whenever HTML files change
    gulp.watch('*.html', browserSync.reload);
    gulp.watch('js/*.js', browserSync.reload);
  });
