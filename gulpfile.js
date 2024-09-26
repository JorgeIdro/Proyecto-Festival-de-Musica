// Una vez importada una función se la puede importar en otro archivo
// en Package.json no es necesario importar, ya lo detecta
export function hola(done) {
    console.log('Hola desde Gulpfile.js');
    done(); // Avisa a gulp que ya termino la función
}