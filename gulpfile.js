const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('autoprefixer')
const minify = require('gulp-minify-css');
const postcss = require('gulp-postcss');
const plumber = require('gulp-plumber');
var browserSync = require('browser-sync').create();
const babel = require('gulp-babel');
const json = require("@rollup/plugin-json");
const polyfill = require("rollup-plugin-polyfill");
const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");

 
sass.compiler = require('node-sass');


gulp.task('sass', () => {     
    return gulp.src('./scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer('last 2 versions')]))
    .pipe(minify())
    .pipe(gulp.dest('./dist/css'))
    .pipe(plumber({
        errorHandler: autoprefixer.logError
    }))
  })

  gulp.task('babel', ()=> {
    gulp.src('./js/main.js')    
    .pipe(babel({
        presets: ['@babel/env']               
    }))
    .pipe(gulp.dest('./dist/js'));
    resolve(),
    commonjs(),
    babel({ babelHelpers: "runtime" }),
    json({include: "package.json", exclude: "*/**"})
  });

  gulp.task('serve', function() {
    browserSync.init({
       server: "./",      
       browser: ["chrome"]
    });      
    gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('run' , gulp.series('sass', 'serve'));

gulp.task('watch', function () {  
    gulp.watch('./scss/*.scss', gulp.series('sass'));    
    gulp.watch('./js/*.js', 'babel');
});

gulp.task('default',  gulp.series('babel','run', 'watch'));

