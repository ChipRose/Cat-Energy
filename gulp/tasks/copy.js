export const copy = () => {
  return app.gulp.src([app.path.src.fonts, app.path.src.favicon, app.path.src.manifest],
  {
    base: app.path.src.copy
  })
    .pipe(app.gulp.dest(app.path.build.copy))
}
