import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());
const buildFolder = "./build";
const sourceFolder = "./source";

export const path = {
  build: {
    js: `${buildFolder}/js/`,
    images: `${buildFolder}/img/`,
    css: `${buildFolder}/css/`,
    html: `${buildFolder}/`,
    copy: `${buildFolder}/`,
  },
  src: {
    js: `${sourceFolder}/js/main.js`,
    images: `${sourceFolder}/img/**/*.{jpg,png,svg}`,
    favicon: `${sourceFolder}/*.ico`,
    webp: `${sourceFolder}/img/**/*.{jpg,jpeg,png}`,
    nowebp: `!${sourceFolder}/img/favicon/*.png`,
    sprite: `${sourceFolder}/img/icons/*.svg`,
    nosprite: `!${sourceFolder}/img/icons/*.svg`,
    scss: `${sourceFolder}/sass/style.scss`,
    html: `${sourceFolder}/*.html`,
    copy: `${sourceFolder}/`,
    fonts: `${sourceFolder}/fonts/*.{woff2,woff}`,
    manifest: `${sourceFolder}/manifest.webmanifest`,
  },
  watch: {
    js: `${sourceFolder}/**/*.js`,
    images: `${sourceFolder}/img/**/*.{jpg,png,webp,svg}`,
    favicon: `${sourceFolder}/*.ico`,
    scss: `${sourceFolder}/**/*.scss`,
    html: `${sourceFolder}/**/*.html`,
    fonts: `${sourceFolder}/fonts/**.{woff2,woff}`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  sourceFolder: sourceFolder,
  rootFolder: rootFolder,
  ftp: ""
}
