import svgstore from "gulp-svgstore";
import svgmin from 'gulp-svgmin';

export const sprite = () => {
  return app.gulp.src(app.path.src.sprite)
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "SPRITE",
        message: "Error: <%= error.message %>"
      })
    ))
    .pipe(svgmin())
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(app.plugins.rename("sprite.svg"))
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.plugins.browsersync.stream());
}
