# Proyecto Festival de Musica

Este Proyecto esta hecho con HTML, SASS, JavaScript, Gulp, ademas de utilizar dependencias como glob, sharp, dart-sass descargadas con NPM.

Con el fin de ampliar mis conocimientos hacia estas tecnologías, seguiré por mas proyectos.

## SASS
![Captura de pantalla 2024-10-17 143608](https://github.com/user-attachments/assets/91eafed5-36f4-4837-8ae5-9d02ee1b5776)

Para este proyecto separe en carpetas el layout y base, estos dos están unidos por el archivo app.scss, ademas los archivos de cada carpeta estarán conectados por el archivo _index.scss.

### · Layout
Aquí están los estilos de cada parte del sitio web tal como el header, galeria, boletos, footer, etc.

### · Base
- Aquí esta las variables de colores, fuente, tamaños de los dispositivos.
- En globales como estilos para etiquetas h, a, img, body, html.
- Los mixins nos permite reutilizar código repetitivo como media queries, grid, etc.
- Y normalize que resetea los estilos de la pagina web.

## JavaScript
- Aquí se encuentran las funciones que muestran todas las imagenes de la galeria y pone la que mejor soporte el navegador.
- Función que amplia una imagen a su maxima resolución cuando un usuario da click.
- Función que cierra la imagen ampliada.
- Función para que el header quede fijo cuando el usuario este bajando en el sitio web.
- Función que resalta el enlace según la sección que se encuentre.
- Función de scroll cuando el usuario da click en el enlace aparecerá que la sección de forma fluida.

## Gulpfile
- Aquí importamos las dependencias descargadas con NPM.
- Funciones que convierten imagenes jpg a webp y avif, versiones mas pequeñas de estas misma.
- Funciones que procesan el SASS y JavaScript y a la vez los minifica.
- Función dev que se activa ante cualquier cambio a los archivos SASS, JS y img.
- Y series que es importado de la dependencia Gulp y que ejecuta según el orden puesto las funciones.

## Package.json
Esta la información del proyecto como el titulo, dependencias de desarrollo, scripts, el nombre del author del proyecto, link del repositorio, etc.

## Nota
Tal vez les sea molesto el hecho que haya muchos comentarios en el código, esto debido que estoy aprendiendo estas tecnologías, en futuros proyectos estos disminuirán, por suerte el package.json no tiene comentarios :laughing:.
