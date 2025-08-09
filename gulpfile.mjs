import gulp from "gulp";
import fileinclude from "gulp-file-include";
import htmlmin from "gulp-htmlmin";
import autoPrefixer from "gulp-autoprefixer";
import * as dartsass from "sass";
import gulpSass from "gulp-sass";
import GulpCleanCss from "gulp-clean-css";
import GulpUglify from "gulp-uglify";
import browserSync from "browser-sync";
import clean from "gulp-clean";
import imagemin from "gulp-imagemin";

const sass = gulpSass(dartsass);
const server = browserSync.create();

const cleanDist = function () {
    return gulp.src("dist/").pipe(clean());
};

const cleanHtml = function () {
    return gulp
        .src("./app/html/*.html")
        .pipe(fileinclude({ basepath: "@file" }))
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest("./dist"));
};

const cleanCss = function () {
    return gulp
        .src("./app/scss/main.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(autoPrefixer())
        .pipe(GulpCleanCss())
        .pipe(gulp.dest("./dist/css"));
};

const cleanJs = function () {
    return (
        gulp
            .src("./app/js/**/*.js")
            // .pipe(GulpUglify())
            .pipe(gulp.dest("dist/js"))
    );
};

const browser = function () {
    server.init({
        server: "dist",
    });
    server.watch("dist").on("change", server.reload);
};

const cleanImg = async function () {
    return gulp
        .src("./app/img/**/*.*", { encoding: false })
        .pipe(imagemin())
        .pipe(gulp.dest("./dist/img"));
};

const watch = function () {
    // gulp.watch("app", gulp.series(cleanHtml, cleanCss, cleanJs, cleanImg));
    gulp.watch("./app/html", cleanHtml);
    gulp.watch("./app/scss", cleanCss);
    gulp.watch("./app/js", cleanJs);
    gulp.watch("./app/img", cleanImg);
};

const build = gulp.series(gulp.parallel(watch, browser));

export {
    cleanHtml,
    cleanCss,
    cleanJs,
    cleanDist,
    browser,
    watch,
    cleanImg,
    build as default,
};
