var gulp = require("gulp"),
    rename = require("gulp-rename"),
    uglify = require("gulp-uglifyes"),
    optimize = require("gulp-requirejs-optimize"),
    extend = require("extend"),
    config = require("./config.js");

gulp.task("build", function() {
    return gulp.src("./main.js")
        .pipe(optimize(extend({}, config, {
            out: "materialize.amd.js",
            optimize: "none"
        })))
        .pipe(gulp.dest("./dist"))
        .pipe(uglify())
        .pipe(rename("materialize.amd.min.js"))
        .pipe(gulp.dest("./dist"));
});
