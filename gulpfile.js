"use strict";
const projectPort = 9145;
const projectName = "konsa_front";
// Load plugins
const autoprefixer = require("autoprefixer");
const browsersync = require("browser-sync").create();
const cp = require("child_process");
const cssnano = require("cssnano");
const del = require("del");
const gulp = require("gulp");
const newer = require("gulp-newer");
const plumber = require("gulp-plumber");
const postcss = require("gulp-postcss");
const rename = require("gulp-rename");
const dartSass = require("sass");
const gulpSass = require("gulp-sass");
const sass = gulpSass(dartSass);
const cssBase64 = require("gulp-base64-inline");
const fileinclude = require("gulp-file-include");

const path = {
  build: {
    //Тут мы укажем куда складывать готовые после сборки файлы
    html: "build/",
    js: "build/js/",
    jsFire: "build/js_fire/",
    assets: "build/assets/",
    imageSprite: "build/css/",
    css: "build/css/",
    img: "build/css/img/",
    upl: "build/upload/",
    fonts: "build/css/fonts/",
    ajax: "build/ajax/",
  },
  src: {
    //Пути откуда брать исходники
    html: "src/*.html", //Синтаксис src/*.html говорит gulp что мы хотим взять все файлы с расширением .html
    js: "src/js/**/*.*", //В стилях и скриптах нам понадобятся только main файлы
    jsFire: "src/js_fire/**/*.*", //В стилях и скриптах нам понадобятся только main файлы
    imageSprite: "src/style/img/sprite/*.*",
    css: "src/style/",
    assets: "src/assets/**/*.*",
    style: "src/style/**/*.scss",
    img: "src/style/img/**/*.*", //Синтаксис img/**/*.* означает - взять все файлы всех расширений из папки и из вложенных каталогов
    upl: "src/upload/**/*.*",
    fonts: "src/style/fonts/**/*.*",
    ajax: "src/ajax/**/*.*",
  },
  watch: {
    //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
    html: "src/**/*.html",
    js: "src/js/**/*.js",
    jsFire: "src/js_fire/**/*.js",
    imageSprite: "src/style/img/sprite/*.*",
    style: "src/style/**/*.scss",
    img: "src/style/img/**/*.*",
    upl: "src/upload/**/*.*",
    assets: "src/assets/**/*.*",
    fonts: "src/style/fonts/**/*.*",
    ajax: "src/ajax/**/*.*",
  },
  clean: "./build",
};

// BrowserSync
function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: "./build/",
    },
    host: "localhost",
    port: projectPort,
    logPrefix: projectName,
  });
  done();
}

// BrowserSync Reload
function browserSyncReload(done) {
  browsersync.reload();
  done();
}

// Clean assets
function clean() {
  return del(["./_site/assets/"]);
}

// Optimize Images
function images() {
  return (
    gulp
      .src(path.src.img)
      // .pipe(newer("./_site/assets/img"))
      .pipe(newer(path.build.img))
      // .pipe(
      // 	imagemin([
      // 		imagemin.gifsicle({ interlaced: true }),
      // 		imagemin.jpegtran({ progressive: true }),
      // 		imagemin.optipng({ optimizationLevel: 5 }),
      // 		imagemin.svgo({
      // 			plugins: [
      // 				{
      // 					removeViewBox: false,
      // 					collapseGroups: true
      // 				}
      // 			]
      // 		})
      // 	])
      // )
      // .pipe(gulp.dest("./_site/assets/img"));
      .pipe(gulp.dest(path.build.img))
  );
}

// Optimize Images
function assets() {
  return (
    gulp
      .src(path.src.assets)
      .pipe(plumber())
      // .pipe(newer("./_site/assets/img"))
      //.pipe(newer(path.build.img))
      // .pipe(
      // 	imagemin([
      // 		imagemin.gifsicle({ interlaced: true }),
      // 		imagemin.jpegtran({ progressive: true }),
      // 		imagemin.optipng({ optimizationLevel: 5 }),
      // 		imagemin.svgo({
      // 			plugins: [
      // 				{
      // 					removeViewBox: false,
      // 					collapseGroups: true
      // 				}
      // 			]
      // 		})
      // 	])
      // )
      // .pipe(gulp.dest("./_site/assets/img"));
      .pipe(gulp.dest(path.build.assets))
  );
}

// CSS task
function css() {
  return (
    gulp
      // .src("./assets/scss/**/*.scss")
      .src(path.src.style)
      .pipe(plumber())
      .pipe(sass({ outputStyle: "expanded" }))
      .pipe(cssBase64("img/svg"))
      // .pipe(gulp.dest("./_site/assets/css/"))
      .pipe(gulp.dest(path.build.css))
      .pipe(rename({ suffix: ".min" }))
      .pipe(postcss([autoprefixer(), cssnano()]))
      // .pipe(gulp.dest("./_site/assets/css/"))
      .pipe(gulp.dest(path.build.css))
      .pipe(browsersync.stream())
  );
}

// HTML task
function html() {
  return (
    gulp
      // .src("./assets/scss/**/*.scss")
      .src([path.src.html])
      // .pipe(plumber())
      .pipe(
        fileinclude({
          prefix: "@@",
          basepath: "@file",
        })
      )
      .pipe(gulp.dest(path.build.html))
      .pipe(browsersync.stream())
  );
}

// UPLOAD task
function upload() {
  return gulp
    .src(path.src.upl)
    .pipe(plumber())
    .pipe(gulp.dest(path.build.upl))
    .pipe(browsersync.stream());
}

// AJAX task
function ajax() {
  return gulp
    .src(path.src.ajax)
    .pipe(plumber())
    .pipe(gulp.dest(path.build.ajax))
    .pipe(browsersync.stream());
}

// FONTS task
function fonts() {
  return gulp
    .src(path.src.fonts)
    .pipe(plumber())
    .pipe(gulp.dest(path.build.fonts))
    .pipe(browsersync.stream());
}

// Lint scripts
/*function scriptsLint() {
	return gulp
		// .src(["./assets/js/!**!/!*", "./gulpfile.js"])
		.src([path.src.js, "./gulpfile.js"])
		.pipe(plumber())
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(eslint.failAfterError());
}*/

// Transpile, concatenate and minify scripts
function js() {
  return (
    gulp
      // .src(["./assets/js/**/*"])
      .src([path.src.js])
      .pipe(plumber())
      // .pipe(webpackstream(webpackconfig, webpack))
      // folder only, filename is specified in webpack config
      // .pipe(gulp.dest("./_site/assets/js/"))
      .pipe(gulp.dest(path.build.js))
      .pipe(browsersync.stream())
  );
}

// Jekyll
/*function jekyll() {
	return cp.spawn("bundle", ["exec", "jekyll", "build"], { stdio: "inherit" });
}*/

// Watch files
function watchFiles() {
  // gulp.watch("./assets/scss/**/*", css);
  gulp.watch("" + path.watch.html, gulp.series(html, browserSyncReload));
  gulp.watch("" + path.watch.style, gulp.series(css, browserSyncReload));
  // gulp.watch("./assets/js/**/*", gulp.series(scriptsLint, scripts));
  // gulp.watch(path.watch.js, gulp.series(scriptsLint, scripts));
  gulp.watch("" + path.watch.js, gulp.series(js, browserSyncReload));
  gulp.watch("" + path.watch.upload, gulp.series(upload, browserSyncReload));
  gulp.watch("" + path.watch.ajax, gulp.series(ajax, browserSyncReload));
  gulp.watch("" + path.watch.fonts, gulp.series(fonts, browserSyncReload));
  /*	gulp.watch(
		[
			"./_includes/!**!/!*",
			"./_layouts/!**!/!*",
			"./_pages/!**!/!*",
			"./_posts/!**!/!*",
			"./_projects/!**!/!*"
		],
		// gulp.series(jekyll, browserSyncReload)
	);*/
  // gulp.watch("./assets/img/**/*", images);
  gulp.watch("" + path.watch.img, gulp.series(images, browserSyncReload));
}

// define complex tasks
// const js = gulp.series(scriptsLint, scripts);
// const build = gulp.series(clean, gulp.parallel(css, images, jekyll, js));
const build = gulp.series(
  clean,
  gulp.parallel(html, css, images, js, fonts, upload, ajax)
);
const watch = gulp.parallel(watchFiles, browserSync);

// export tasks
exports.html = html;
exports.ajax = ajax;
exports.upload = upload;
exports.fonts = fonts;
exports.images = images;
exports.css = css;
// exports.assets = assets;
exports.js = js;
// exports.jekyll = jekyll;
exports.clean = clean;
exports.build = build;
exports.watch = watch;
exports.default = build;
