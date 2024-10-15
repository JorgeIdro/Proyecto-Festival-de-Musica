
import { src, dest, watch, series } from "gulp"; // Extraemos src(archivos fuentes) y dest(donde se va a almacenar) de la dependencia gulp
import * as dartSass from "sass"; // Extraemos todo(*) de sass con el nombre dartSass
// series nos servirá para ejecutar todas las tareas en un solo llamado
import gulpSass from "gulp-sass"; // Extraemos la dependencia que descargamos y asi tenemos todas sus funciones en este archivo

const sass = gulpSass(dartSass); // para que gulSass utilice a dartSass

import terser from 'gulp-terser'; // nos sirve para minificar JS

export function js(done) {
    src('src/js/app.js')
    .pipe(terser()) // Minifica el código de JS
    .pipe(dest('build/js'))
    
    done();
}

// Una vez importada una función se la puede importar en otro archivo
// en Package.json no es necesario importar, ya lo detecta
// .pipe son como tareas que le damos y se hagan en el orden que pongamos

export function css(done) {
    src('src/scss/app.scss', {sourcemaps: true}) // para que lo encuentre el archivo sass
    // sourcemaps cuando revisamos en código css en el navegador nos dice en que archivo de SASS esta ubicado
    .pipe(sass({ // lo compila
        outputStyle: 'compressed' // minifica app.css // expanded es el default los demás son incompatibles
    }).on('error', sass.logError)) //  en caso de error nos avisa
    .pipe(dest('build/css', {sourcemaps: '.'})) // lo almacena en el css y el map aparte
    
    done(); // Avisa a gulp que ya termino la función
}

import sharp from 'sharp';
import path from 'path'; // ubicación de la carpeta
import fs from 'fs'; // para generar a carpeta de las img

// Esta función nos sirve para hacer imagenes grandes en pequeñas
// código de node.js
export async function crop(done) {
    const inputFolder = 'src/img/gallery/full' // busca la galeria de imagenes
    const outputFolder = 'src/img/gallery/thumb'; // donde va a guardar las imagenes mas pequeñas
    const width = 250; // ajustamos el tamaño de las imagenes
    const height = 180;
    if (!fs.existsSync(outputFolder)) { // revisa si existe la carpeta, en caso de que no la crea
        fs.mkdirSync(outputFolder, { recursive: true })
    }
    const images = fs.readdirSync(inputFolder).filter(file => { // revisa que sean imagenes para procesarlas
        return /\.(jpg)$/i.test(path.extname(file));
    });
    try { // procesa cada una de las imagenes
        images.forEach(file => {
            const inputFile = path.join(inputFolder, file) // archivo de entrada
            const outputFile = path.join(outputFolder, file) // archivo de salida
            sharp(inputFile)  // pasa el archivo que va a procesar
                .resize(width, height, { // pasa el tamaño establecido
                    position: 'centre' // no es center xd
                })
                .toFile(outputFile) // lo almacena
        });

        done() // finalizo la tarea
    } catch (error) {
        console.log(error) // en caso de error
    }
}

//watch
export function dev() { // no se le pasa done para que la función no se detenga y siga compilando el Sass
    watch('src/scss/**/*.scss', css) // cada que haya cambios ejecuta la función css
    watch('src/js/**/*.js', js);
}
// ** : todos las carpetas // *.scss : todos los archivos .scss

// Esto es lo mismo que "sass": "sass --watch src/scss:build/css", en el package.json


export default series(crop, js, css, dev); // primero ejecuta js, luego css y por ultimo dev
// dev de ultimo porque esta tarea no debe finalizar

// "parallel" es similar a "series" pero este ejecutara todas las tareas al mismo tiempo