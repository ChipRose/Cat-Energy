//Gulp import
import gulp from "gulp";
//Path import
import { path } from "./gulp/config/path.js";
//Plugins import
import { plugins } from "./gulp/config/plugins.js";

//Global variable
global.app = {
  path: path,
  gulp: gulp,
  plugins: plugins,
}

import { copy } from "./gulp/tasks/copy.js";
import { copyImages } from "./gulp/tasks/copyImages.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { images } from "./gulp/tasks/images.js";
import { createWebp } from "./gulp/tasks/webp.js";
import { sprite } from "./gulp/tasks/sprite.js";
import { js } from "./gulp/tasks/js.js";

//Watcher
const watcher = () => {
  gulp.watch(path.watch.fonts, copy);
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.images, images);
  gulp.watch(path.watch.js, js);
}

//Script

const devTasks = gulp.parallel(copy, html, scss, copyImages, createWebp, sprite, js);
const mainTasks = gulp.parallel(copy, html, scss, images, createWebp, sprite, js);


//Result

const dev = gulp.series(reset, devTasks, gulp.parallel(watcher, server));
gulp.task("default", dev);

const build = gulp.series(reset, mainTasks);
gulp.task("build", build);
