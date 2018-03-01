var gulp = require("gulp"),
    extend = require("extend"),
    optimize = require("gulp-requirejs-optimize"),
    config = require("./config.js");

gulp.task("build", function() {
    return gulp.src("./main.js")
        .pipe(optimize(extend({}, config, {
            out: "materialize.amd.js",
            optimize: "none"
        })))
        .pipe(gulp.dest("./dist"));
});
