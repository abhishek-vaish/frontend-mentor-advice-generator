const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const cssMinify = require("gulp-css-minify");
const browserSync = require("browser-sync");

const sassTask = () => {
  return gulp
    .src("./app/sass/**/*.scss", { sourcemaps: true })
    .pipe(sass())
    .pipe(cssMinify())
    .pipe(gulp.dest("./dist/css/", { sourcemaps: true }));
};

const browserTask = (cb) => {
  browserSync.init({
    server: {
      baseDir: ".",
    },
  });
  cb();
};

const reloadTask = (cb) => {
  browserSync.reload();
  cb();
};

const watchTask = () => {
  gulp.watch("*.html", reloadTask);
  gulp.watch("./app/sass/**/*.scss", gulp.series(sassTask, reloadTask));
};

exports.default = gulp.series(sassTask, browserTask, watchTask);
exports.build = gulp.series(sassTask);
