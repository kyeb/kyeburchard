var gulp = require("gulp"),
  sass = require("gulp-sass"),
  postcss = require("gulp-postcss"),
  autoprefixer = require("autoprefixer"),
  cssnano = require("cssnano");
browsersync = require("browser-sync").create();
rename = require("gulp-rename");

var paths = {
  styles: {
    src: "scss/styles.scss",
    dest: "css",
    watch: "scss/*",
  },
};

function style() {
  return gulp
    .src(paths.styles.src)
    .pipe(sass())
    .on("error", sass.logError)
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(rename("styles.min.css"))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browsersync.stream());
}

var reload = browsersync.reload;

function dev() {
  // compile scss initially
  style();

  // browsersync server
  browsersync.init({
    server: {
      baseDir: "./",
    },
  });

  // watch for style changes and compile
  gulp.watch(paths.styles.watch, style);
  gulp.watch("*.html").on("change", reload);
}

exports.style = style;
exports.dev = dev;
