import { src, dest, watch, series } from "gulp"; // Extraemos src(archivos fuentes) y dest(donde se va a almacenar) de la dependencia gulp
import * as dartSass from "sass"; // Extraemos todo(*) de sass con el nombre dartSass
// series nos servirá para ejecutar todas las tareas en un solo llamado
import gulpSass from "gulp-sass"; // Extraemos la dependencia que descargamos y asi tenemos todas sus funciones en este archivo

const sass = gulpSass(dartSass); // para que gulSass utilice a dartSass

export function js(done) {
    src('src/js/app.js')
        .pipe(dest('build/js'))

    done();
}

// Una vez importada una función se la puede importar en otro archivo
// en Package.json no es necesario importar, ya lo detecta
// .pipe son como tareas que le damos y se hagan en el orden que pongamos

export function css(done) {
    src('src/scss/app.scss', {sourcemaps: true}) // para que lo encuentre el archivo sass
    // sourcemaps cuando revisamos en código css en el navegador nos dice en que archivo de SASS esta ubicado
        .pipe(sass().on('error', sass.logError)) // lo compila y en caso de error nos avisa
        .pipe(dest('build/css', {sourcemaps: '.'})) // lo almacena en el css y el map aparte

    done(); // Avisa a gulp que ya termino la función
}

//watch
export function dev() { // no se le pasa done para que la función no se detenga y siga compilando el Sass
    watch('src/scss/**/*.scss', css) // cada que haya cambios ejecuta la función css
    watch('src/js/**/*.js', js);
}
// ** : todos las carpetas // *.scss : todos los archivos .scss

// Esto es lo mismo que "sass": "sass --watch src/scss:build/css", en el package.json


export default series(js, css, dev); // primero ejecuta js, luego css y por ultimo dev
// dev de ultimo porque esta tarea no debe finalizar

// "parallel" es similar a "series" pero este ejecutara todas las tareas al mismo tiempo