const gulp = require("gulp")
var babel = require("gulp-babel")
var eslint = require("gulp-eslint");
var livereload = require('gulp-livereload');


gulp.task('default', function(done){
    // check errors
    gulp.src(['src/*.js','!node_modules/**']).pipe(eslint()).pipe(eslint.format()).pipe(eslint.failAfterError()).pipe(livereload());


    // babel es6 to es5
    gulp.src("src/*.js").pipe(babel({presets: [
        ['@babel/env', {
          modules: false
        }]
      ]})).pipe(gulp.dest('dist')).pipe(livereload());
    done();
});

gulp.task('watch', function() {
  gulp.watch('src/*.js', ['eslint']);
  gulp.watch('src/*.js', ['babel']);
});