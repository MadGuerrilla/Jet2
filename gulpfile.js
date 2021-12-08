var gulp = require('gulp')
var clean = require('gulp-clean')
var sass = require('gulp-sass')
var sourcemaps = require('gulp-sourcemaps')
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat')
var copy = require('gulp-contrib-copy')
var minify = require('gulp-minify');
var nodemon = require('gulp-nodemon')
var nunjucks = require('gulp-nunjucks-html')

gulp.task('default', ['deployment'])
gulp.task('deployment', ['clean', 'sass', 'js', 'server'])
gulp.task('html', ['clean', 'sass', 'js', 'htmlbuild'])
gulp.task('server', ['watch', 'start'])

gulp.task('clean', function() {
    clean(['./dist/**'])
    clean(['./htmlbuild/**'])
})

gulp.task('sass', function() {
    return gulp.src('./app/assets/sass/imports.scss')
        .pipe(sourcemaps.init())
        .pipe(autoprefixer({ browsers: ['> 1%', 'IE 8'], cascade: false }))
        .pipe(sass.sync({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(concat('jet2Modal.css'))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./dist/css'))
})

gulp.task('js', function() {
    return gulp.src('./app/assets/js/**/*.js')
        .pipe(concat('jet2Modal.js'))
        .pipe(minify({
            ext: {
                src: '-debug.js',
                min: '.js'
            }
        }))
        .pipe(gulp.dest('./dist/js'))
})

gulp.task('watch', ['start'], function() {
    gulp.watch('./app/assets/sass/**/*.scss', ['sass'])
    gulp.watch('./app/assets/js/**/*.js', ['js'])
})

gulp.task('start', function() {
    nodemon({
        script: 'server.js'
    }).on('restart', function() {
        console.log('Server restarted...')
    })
})

gulp.task('htmlbuild', function() {
    gulp.src('./dist/**')
        .pipe(copy())
        .pipe(gulp.dest('./htmlbuild/dist/'))
    return gulp.src('app/pages/*.njk')
        .pipe(nunjucks({
            searchPaths: ['app/pages'],
            ext: '.html'
        }))
        .pipe(gulp.dest('htmlbuild'));
})
