import postcss from "gulp-postcss";
import cleanCss from "gulp-clean-css";
import csso from "postcss-csso";
import autoprefixer from "autoprefixer";
import groupCssMediaQueries from "gulp-group-css-media-queries";
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);

export const scss = () => {
  return app.gulp.src(app.path.src.scss, { sourcemaps: true })
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "SCSS",
        message: "Error: <%= error.message %>"
      })
    ))
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(groupCssMediaQueries())
    .pipe(postcss([
      autoprefixer(),
      csso()
    ]))
    .pipe(cleanCss())
    .pipe(app.plugins.rename({
      extname: ".min.css"
    }))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browsersync.stream());
}
