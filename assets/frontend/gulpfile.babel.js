import { rollup } from 'rollup';
import { uglify } from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import concat from 'gulp-concat';
import dedent from 'dedent';
import gulp from 'gulp';
import gulpif from 'gulp-if';
import inject from 'rollup-plugin-inject';
import livereload from 'gulp-livereload';
import merge from 'merge-stream';
import order from 'gulp-order';
import resolve from 'rollup-plugin-node-resolve';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import uglifycss from 'gulp-uglifycss';
import upath from 'upath';
import yargs from 'yargs';

const { argv } = yargs
  .options({
    rootPath: {
      description: '<path> path to web assets directory',
      type: 'string',
      requiresArg: true,
      required: true,
    },
    vendorPath: {
      description: '<path> path to vendor directory',
      type: 'string',
      requiresArg: true,
      required: false,
    },
    nodeModulesPath: {
      description: '<path> path to node_modules directory',
      type: 'string',
      requiresArg: true,
      required: true,
    },
  });

const env = process.env.GULP_ENV;
const options = {
  minify: env === 'prod',
  sourcemaps: env !== 'prod',
};

const rootPath = upath.normalizeSafe(argv.rootPath);
const appRootPath = upath.joinSafe(rootPath, 'frontend');
const vendorPath = upath.normalizeSafe(argv.vendorPath || '.');
const appPath = vendorPath === '.' ? '.' : upath.joinSafe(vendorPath, '../../assets/frontend');
const vendorUiPath = vendorPath === '.' ? '../../vendor/sylius/ui-bundle' : upath.joinSafe(vendorPath, 'sylius/ui-bundle');
const nodeModulesPath = upath.normalizeSafe(argv.nodeModulesPath);

const paths = {
  app: {
    js: [
      upath.joinSafe(nodeModulesPath, 'jquery/dist/jquery.min.js'),
      upath.joinSafe(nodeModulesPath, 'jquery-ui-dist/jquery-ui.min.js'),
      upath.joinSafe(nodeModulesPath, 'bootstrap/dist/js/bootstrap.bundle.js'),
      upath.joinSafe(nodeModulesPath, 'rater-jquery/rater.js'),
      upath.joinSafe(vendorUiPath, 'Resources/private/js/sylius-form-collection.js'),
      upath.joinSafe(appPath, 'plugins/bootstrap-notify/bootstrap-notify.js'),
      upath.joinSafe(appPath, 'plugins/isotope/imagesloaded.pkgd.min.js'),
      upath.joinSafe(appPath, 'plugins/isotope/isotope.pkgd.min.js'),
      upath.joinSafe(appPath, 'plugins/magnific-popup/jquery.magnific-popup.min.js'),
      upath.joinSafe(appPath, 'plugins/waypoints/jquery.waypoints.min.js'),
      upath.joinSafe(appPath, 'plugins/waypoints/sticky.min.js'),
      upath.joinSafe(appPath, 'plugins/countdown/jquery.countdown.js'),
      upath.joinSafe(appPath, 'plugins/countTo/jquery.countTo.js'),
      upath.joinSafe(appPath, 'plugins/slick/slick.min.js'),
      upath.joinSafe(appPath, 'js/**.js'),
    ],
    sass: [
      upath.joinSafe(appPath, 'sass/style.scss'),
      upath.joinSafe(appPath, 'sass/typography-default.scss'),
      upath.joinSafe(appPath, 'sass/skins/light_blue.scss'),
    ],
    css: [
      upath.joinSafe(nodeModulesPath, 'bootstrap/dist/css/bootstrap.css'),
      upath.joinSafe(nodeModulesPath, 'font-awesome/css/font-awesome.css'),
      upath.joinSafe(appPath, 'plugins/magnific-popup/magnific-popup.css'),
      upath.joinSafe(appPath, 'css/animations.css'),
      upath.joinSafe(appPath, 'plugins/slick/slick.css'),
    ],
    img: [
      upath.joinSafe(appPath, 'images/**'),
    ],
    font: [
      upath.joinSafe(nodeModulesPath, 'font-awesome/fonts/**'),
    ],
  },
};

const sourcePathMap = [
  {
    sourceDir: upath.relative('', upath.joinSafe(appPath, 'Resources/private')),
    destPath: '/SyliusShopBundle/',
  },
  {
    sourceDir: upath.relative('', upath.joinSafe(vendorUiPath, 'Resources/private')),
    destPath: '/SyliusUiBundle/',
  },
  {
    sourceDir: upath.relative('', nodeModulesPath),
    destPath: '/node_modules/',
  },
];

const mapSourcePath = function mapSourcePath(sourcePath) {
  const match = sourcePathMap.find(({ sourceDir }) => (
    sourcePath.substring(0, sourceDir.length) === sourceDir
  ));

  if (!match) {
    return sourcePath;
  }

  const { sourceDir, destPath } = match;

  return upath.joinSafe(destPath, sourcePath.substring(sourceDir.length));
};

export const buildShopJs = async function buildShopJs() {
  const bundle = await rollup({
    input: upath.joinSafe(appPath, 'js/app.js'),
    plugins: [
      {
        name: 'shim-app',

        transform(code, id) {
          if (upath.relative('', id) === upath.relative('', upath.joinSafe(appPath, 'js/app.js'))) {
            return {
              code: dedent`
                import './shim/shim-polyfill';
                import './shim/shim-jquery';
                import './shim/shim-semantic-ui';
                import './shim/shim-lightbox';

                ${code}
              `,
              map: null,
            };
          }

          return undefined;
        },
      },
      inject({
        include: `${nodeModulesPath}/**`,
        modules: {
          $: 'jquery',
          jQuery: 'jquery',
        },
      }),
      resolve({
        jail: upath.resolve(nodeModulesPath),
      }),
      commonjs({
        include: `${nodeModulesPath}/**`,
      }),
      babel({
        babelrc: false,
        exclude: `${nodeModulesPath}/**`,
        presets: [
          ['env', {
            targets: {
              browsers: [
                'last 2 versions',
                'Firefox ESR',
                'IE >= 9',
                'Android >= 4.0',
                'iOS >= 7',
              ],
            },
            modules: false,
            exclude: [
              'transform-async-to-generator',
              'transform-regenerator',
            ],
            useBuiltIns: true,
          }],
        ],
        plugins: [
          ['external-helpers'],
          ['fast-async'],
          ['module-resolver', {
            alias: {
              'sylius/ui': upath.relative('', upath.joinSafe(vendorUiPath, 'Resources/private/js')),
            },
          }],
          ['transform-object-rest-spread', {
            useBuiltIns: false,
          }],
        ],
      }),
      options.minify && uglify(),
    ],
    treeshake: false,
  });

  await bundle.write({
    file: upath.joinSafe(appRootPath, 'js/app.js'),
    format: 'iife',
    sourcemap: options.sourcemaps,
  });
};
buildShopJs.description = 'Build app js assets.';

export const buildShopCss = function buildShopCss() {
  const copyStream = merge(
    gulp.src(upath.joinSafe(nodeModulesPath, 'semantic-ui-css/themes/**/*'))
      .pipe(gulp.dest(upath.joinSafe(appRootPath, 'css/themes'))),
  );

  const cssStream = gulp.src(paths.app.css, { base: './' })
    .pipe(gulpif(options.sourcemaps, sourcemaps.init()))
    .pipe(concat('css-files.css'));

  const sassStream = gulp.src(paths.app.sass, { base: './' })
    .pipe(gulpif(options.sourcemaps, sourcemaps.init()))
    .pipe(sass())
    .pipe(concat('sass-files.scss'));

  return merge(
    copyStream,
    merge(cssStream, sassStream)
      .pipe(order(['css-files.css', 'sass-files.scss']))
      .pipe(concat('style.css'))
      .pipe(gulpif(options.minify, uglifycss()))
      .pipe(gulpif(options.sourcemaps, sourcemaps.mapSources(mapSourcePath)))
      .pipe(gulpif(options.sourcemaps, sourcemaps.write('./')))
      .pipe(gulp.dest(upath.joinSafe(appRootPath, 'css')))
      .pipe(livereload()),
  );
};
buildShopCss.description = 'Build app css assets.';

export const buildShopImg = function buildShopImg() {
  const copyStream = merge(
    gulp.src(upath.joinSafe(nodeModulesPath, 'lightbox2/dist/images/*'))
      .pipe(gulp.dest(upath.joinSafe(appRootPath, 'images'))),
  );

  return merge(
    copyStream,
    gulp.src(paths.app.img)
      .pipe(gulp.dest(upath.joinSafe(appRootPath, 'images'))),
  );
};
buildShopImg.description = 'Build app img assets.';

export const buildShopFont = function buildShopFont() {
  const copyStream = merge(
      gulp.src(upath.joinSafe(nodeModulesPath, 'lightbox2/dist/images/*'))
          .pipe(gulp.dest(upath.joinSafe(appRootPath, 'fonts'))),
  );

  return merge(
      copyStream,
      gulp.src(paths.app.font)
          .pipe(gulp.dest(upath.joinSafe(appRootPath, 'fonts'))),
  );
};
buildShopFont.description = 'Build app fonts.';

export const watchShop = function watchShop() {
  livereload.listen();

  gulp.watch(paths.app.js, buildShopJs);
  gulp.watch(paths.app.sass, buildShopCss);
  gulp.watch(paths.app.css, buildShopCss);
  gulp.watch(paths.app.img, buildShopImg);
  gulp.watch(paths.app.font, buildShopFont);
};
watchShop.description = 'Watch app asset sources and rebuild on changes.';

export const build = gulp.parallel(buildShopJs, buildShopCss, buildShopImg, buildShopFont);
build.description = 'Build assets.';

export const watch = gulp.parallel(build, watchShop);
watch.description = 'Watch asset sources and rebuild on changes.';

gulp.task('app-js', buildShopJs);
gulp.task('app-css', buildShopCss);
gulp.task('app-img', buildShopImg);
gulp.task('app-font', buildShopFont);
gulp.task('app-watch', watchShop);

export default build;
