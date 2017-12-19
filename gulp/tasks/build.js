var gulp = require('gulp'),
    imgMin=require('gulp-imagemin'),
    del=require('del'),
    usemin=require('gulp-usemin'),
    rev=require('gulp-rev'),
    cssnano=require('gulp-cssnano'),
    uglify=require('gulp-uglify'),
    browserSync = require('browser-sync').create();

gulp.task('previewDist', function(){
  browserSync.init({
    notify: false,
    server: {
      baseDir: "dist"
    }
  });
});

gulp.task('delDistFolder', function (){
  return del('./dist');
});

gulp.task('copyFiles',['delDistFolder'], function(){
  var pathsToCopy=[
    './app/**/*',
    '!./app/index.html',
    '!./app/assets/images/**',
    '!./app/assets/scripts/**',
    '!./app/assets/styles/**',
    '!./app/temp',
    '!./app/temp/**',
  ]
  return gulp.src(pathsToCopy)
  .pipe(gulp.dest('./dist'));
});

gulp.task('optimizeImages',['delDistFolder', 'icons'], function(){
  return gulp.src(['./app/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
  .pipe(imgMin({
    progressive:true,
    interlaced:true,
    multipass:true
  }))
  .pipe(gulp.dest('./dist/assets/images'));
});

gulp.task('usemin',['delDistFolder', 'styles', 'scripts'], function(){
  return gulp.src('./app/index.html/')
  .pipe(usemin({
    css:[function(){return rev()}, function(){return cssnano()}],
    js:[function(){return rev()}, function(){return uglify()}]
  }))
  .pipe(gulp.dest('./dist'));
});

gulp.task('build', ['delDistFolder', 'copyFiles', 'optimizeImages', 'usemin']);
