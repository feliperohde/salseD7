'use strict';
export default function(gulp, plugins, args, config, taskTarget, browserSync) {

  // BrowserSync
  gulp.task('browserSync', () => {
		browserSync.init(['./css/*.css', './js/build/*.js'], {
		  proxy: "drupal7dummy.docksal",
		  port: config.port || 3000,
      open: args.open ? 'local' : false,
		});
  });
}
