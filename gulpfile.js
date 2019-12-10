var gulp       = require('gulp'), // Подключаем Gulp
	sass         = require('gulp-sass'), //Подключаем Sass пакет,
	sourcemaps = require('gulp-sourcemaps'),
	browserSync  = require('browser-sync'), // Подключаем Browser Sync
	concat       = require('gulp-concat'), // Подключаем gulp-concat (для конкатенации файлов)
	uglify       = require('gulp-uglify'), // Подключаем gulp-uglify (для сжатия JS)
	cssnano      = require('gulp-cssnano'), // Подключаем пакет для минификации CSS
	rename       = require('gulp-rename'), // Подключаем библиотеку для переименования файлов
	del          = require('del'), // Подключаем библиотеку для удаления файлов и папок
	imagemin     = require('gulp-imagemin'), // Подключаем библиотеку для работы с изображениями
	pngquant     = require('imagemin-pngquant'), // Подключаем библиотеку для работы с png
	cache        = require('gulp-cache'), // Подключаем библиотеку кеширования
	autoprefixer = require('gulp-autoprefixer');// Подключаем библиотеку для автоматического добавления префиксов

gulp.task('sass', function(){ // Создаем таск Sass
	return gulp.src('app/sass/**/*.scss') // Берем источник
		.pipe(sourcemaps.init())
		.pipe(sass({
			sourceMap: true,
			errLogToConsole: true
		})) // Преобразуем Sass в CSS посредством gulp-sass
		.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // Создаем префиксы
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('app/css')) // Выгружаем результат в папку app/css
		.pipe(browserSync.reload({stream: true})); // Обновляем CSS на странице при изменении
});

gulp.task('browser-sync', function() { // Создаем таск browser-sync
	browserSync({ // Выполняем browserSync
		server: { // Определяем параметры сервера
			baseDir: 'app', // Директория для сервера - app
			directory: true // Смотрим все файлы в директории
		},
		notify: false, // Отключаем уведомления
		ghostMode: false
	});
});

gulp.task('watch', ['browser-sync'], function() {
	gulp.watch('app/sass/**/*.scss', ['sass']); // Наблюдение за sass файлами в папке sass
	gulp.watch('app/*.html', browserSync.reload); // Наблюдение за HTML файлами в корне проекта
	gulp.watch('app/js/**/*.js', browserSync.reload); // Наблюдение за JS файлами в папке js
});

gulp.task('clean', function() {
	return del.sync('dist'); // Удаляем папку dist перед сборкой
});

gulp.task('img', function() {
	return gulp.src('app/pic/**/*') // Берем все изображения из app`
		// .pipe(cache(imagemin([
		// 	imagemin.gifsicle({interlaced: true}),
		// 	imagemin.jpegtran({progressive: true}),
		// 	imagemin.optipng({optimizationLevel: 5}),
		// 	imagemin.svgo({
		// 		plugins: [
		// 			{ optimizationLevel: 3 },
		// 			{ progessive: true },
		// 			{ interlaced: true },
		// 			{ removeViewBox: false },
		// 			{ removeUselessStrokeAndFill: false },
		// 			{ cleanupIDs: false }
		// 		]
		// 	})
		// ])))
		.pipe(gulp.dest('dist/pic')); // Выгружаем на продакшен
});

gulp.task('build', ['clean', 'img', 'sass'], function() {
	
	var buildCSS = gulp.src('app/css/**/*') // Переносим CSS в продакшен
		.pipe(cssnano())
		.pipe(gulp.dest('dist/css'));

	var buildFonts = gulp.src('app/fonts/**/*') // Переносим шрифты в продакшен
		.pipe(gulp.dest('dist/fonts'));
	
	var buildVideo = gulp.src('app/video/**/*') // Переносим видео в продакшен
		.pipe(gulp.dest('dist/video'));

	var buildJs = gulp.src('app/js/**/*') // Переносим скрипты в продакшен
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'));

	var buildHtml = gulp.src('app/*.html') // Переносим HTML в продакшен
		.pipe(gulp.dest('dist'));
	
	var buildJSON = gulp.src('app/*.json') // Переносим JSON в продакшен
		.pipe(gulp.dest('dist'));

});

gulp.task('clear', function (callback) {
	return cache.clearAll();
});

gulp.task('default', ['watch']);