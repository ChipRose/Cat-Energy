export const copyImages = () => {
  return app.gulp.src([app.path.src.images, app.path.src.nosprite])
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "COPY IMAGES",
        message: "Error: <%= error.message %>"
      })
    ))
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.plugins.browsersync.stream());
}
