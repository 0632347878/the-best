var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "/" 
        }
        // files: ["app/css/style.css", "app/js/*.js"]
        files: "css/all.css"
    });
});

// $ browser-sync start --server --files "*.*"  // trash
browser-sync start --server --files "*.html, css/*.css" // work

// or...

// gulp.task('browser-sync', function() {
//     browserSync.init({
//         proxy: "yourlocal.dev"
//     });
// });