import { src, dest, watch } from "gulp"; // Extraemos src(archivos fuentes) y dest(donde se va a almacenar) de la dependencia gulp
import * as dartSass from "sass"; // Extraemos todo(*) de sass con el nombre dartSass
import gulpSass from "gulp-sass"; // Extraemos la dependencia que descargamos y asi tenemos todas sus funciones en este archivo

const sass = gulpSass(dartSass); // para que gulSass utilice a dartSass

// Una vez importada una función se la puede importar en otro archivo
// en Package.json no es necesario importar, ya lo detecta
// .pipe son como tareas que le damos y se hagan en el orden que pongamos

export function css(done) {
    src('src/scss/app.scss') // para que lo encuentre el archivo sass
        .pipe(sass()) // lo compila
        .pipe(dest('build/css')) // lo almacena en el css

    done(); // Avisa a gulp que ya termino la función
}

//watch
export function dev() { // no se le pasa done para que la función no se detenga y siga compilando el Sass
    watch('src/scss/app.scss', css) // cada que haya cambios ejecuta la función css
}

// Esto es lo mismo que "sass": "sass --watch src/scss:build/css", en el package.json